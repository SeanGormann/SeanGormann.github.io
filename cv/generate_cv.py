"""
Generate Sean Gorman's CV PDF from data/cv.json.
Run from repo root: python cv/generate_cv.py
Output:            data/files/SeanGorman-CV.pdf
"""

import json
import os
from pathlib import Path

from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable,
    Table, TableStyle, KeepTogether
)
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.platypus import Flowable

# ── Paths ─────────────────────────────────────────────────────────────────────
REPO_ROOT = Path(__file__).parent.parent
DATA_FILE = REPO_ROOT / "data" / "cv.json"
OUT_FILE  = REPO_ROOT / "public" / "files" / "SeanGorman-CV.pdf"

with open(DATA_FILE) as f:
    cv = json.load(f)

W, H   = A4
margin = 18 * mm

# ── Colours ───────────────────────────────────────────────────────────────────
INK       = colors.HexColor('#1a1a1a')
MUTED     = colors.HexColor('#555555')
LIGHT     = colors.HexColor('#888888')
RULE      = colors.HexColor('#cccccc')
ACCENT    = colors.HexColor('#1a4a7a')
TAG_BG    = colors.HexColor('#f0f4f8')
TAG_FG    = colors.HexColor('#334e68')

# ── Styles ────────────────────────────────────────────────────────────────────
def S(name, **kw):
    defaults = dict(fontName='Times-Roman', fontSize=10, leading=14,
                    textColor=INK, spaceAfter=0, spaceBefore=0)
    defaults.update(kw)
    return ParagraphStyle(name, **defaults)

sName    = S('name',    fontName='Times-Bold',   fontSize=28, leading=32)
sContact = S('contact', fontName='Courier',       fontSize=8.5, textColor=MUTED, leading=12)
sSecHead = S('sechead', fontName='Courier-Bold',  fontSize=7.5, textColor=LIGHT,
             spaceBefore=14, spaceAfter=4, leading=10)
sRole    = S('role',    fontName='Times-Bold',    fontSize=12, leading=15)
sRoleR   = S('roler',   fontName='Courier',       fontSize=8,  textColor=LIGHT, alignment=TA_RIGHT)
sCo      = S('co',      fontName='Times-Italic',  fontSize=9.5, textColor=MUTED, leading=13)
sSubHead = S('subhead', fontName='Courier-Bold',  fontSize=7.5, textColor=ACCENT,
             spaceBefore=6, spaceAfter=2)
sBullet  = S('bullet',  fontName='Times-Roman',   fontSize=9.5, textColor=MUTED,
             leading=13.5, leftIndent=10, firstLineIndent=-8)
sProjN   = S('projn',   fontName='Times-Bold',    fontSize=10.5)
sProjD   = S('projd',   fontName='Times-Roman',   fontSize=9.5, textColor=MUTED, leading=13)
sEduDeg  = S('edudeg',  fontName='Times-Bold',    fontSize=10.5)
sEduSch  = S('edus',    fontName='Times-Roman',   fontSize=9.5, textColor=MUTED, leading=13)
sEduTh   = S('eduth',   fontName='Times-Italic',  fontSize=9,   textColor=MUTED, leading=12)
sEduMod  = S('edumod',  fontName='Courier',       fontSize=8,   textColor=LIGHT, leading=11)
sCite    = S('cite',    fontName='Times-Roman',   fontSize=8.5, textColor=MUTED,
             leading=12.5, leftIndent=10, firstLineIndent=-8)
sAward   = S('award',   fontName='Times-Bold',    fontSize=9.5)
sAwardD  = S('awardd',  fontName='Times-Roman',   fontSize=9,   textColor=MUTED, leading=12.5)

# ── Custom Flowables ──────────────────────────────────────────────────────────
class SectionRule(Flowable):
    def __init__(self, width):
        Flowable.__init__(self)
        self.width = width
        self.height = 0.5
    def draw(self):
        self.canv.setStrokeColor(RULE)
        self.canv.setLineWidth(0.4)
        self.canv.line(0, 0, self.width, 0)


class TagCloud(Flowable):
    def __init__(self, tags, width, font='Courier', fs=7.5, pad_h=5, pad_v=2.5, gap=4):
        Flowable.__init__(self)
        self.tags  = tags
        self.width = width
        self.font  = font
        self.fs    = fs
        self.pad_h = pad_h
        self.pad_v = pad_v
        self.gap   = gap
        self._layout()

    def _layout(self):
        from reportlab.pdfbase.pdfmetrics import stringWidth
        rows, row, x = [], [], 0
        for tag in self.tags:
            tw = stringWidth(tag, self.font, self.fs) + 2 * self.pad_h
            if x + tw > self.width and row:
                rows.append(row); row = []; x = 0
            row.append((tag, tw))
            x += tw + self.gap
        if row:
            rows.append(row)
        self.rows  = rows
        row_h      = self.fs + 2 * self.pad_v
        self.height = len(rows) * row_h + (len(rows) - 1) * self.gap

    def draw(self):
        c     = self.canv
        row_h = self.fs + 2 * self.pad_v
        y     = self.height - row_h
        for row in self.rows:
            x = 0
            for tag, tw in row:
                c.setFillColor(TAG_BG)
                c.roundRect(x, y, tw, row_h, 3, stroke=0, fill=1)
                c.setFillColor(TAG_FG)
                c.setFont(self.font, self.fs)
                c.drawString(x + self.pad_h, y + self.pad_v + 1.5, tag)
                x += tw + self.gap
            y -= row_h + self.gap


class AwardBlock(Flowable):
    def __init__(self, title, desc, width):
        Flowable.__init__(self)
        bar   = 3
        inner = width - bar - 8
        t = Paragraph(title, sAward)
        d = Paragraph(desc,  sAwardD)
        _, th = t.wrap(inner, 9999)
        _, dh = d.wrap(inner, 9999)
        self._t  = t;  self._d  = d
        self._th = th; self._dh = dh
        self.width  = width
        self.height = th + dh + 10

    def draw(self):
        c   = self.canv
        bar = 3
        c.setFillColor(ACCENT)
        c.rect(0, 0, bar, self.height, stroke=0, fill=1)
        c.setFillColor(TAG_BG)
        c.rect(bar, 0, self.width - bar, self.height, stroke=0, fill=1)
        inner_x = bar + 6
        top     = self.height - 5
        self._t.drawOn(c, inner_x, top - self._th)
        self._d.drawOn(c, inner_x, top - self._th - self._dh - 1)


# ── Helpers ───────────────────────────────────────────────────────────────────
def bullet(text):
    return Paragraph(f'<font color="#aaaaaa">&#8212;</font>  {text}', sBullet)

def section(title, usable_w):
    return [Paragraph(title, sSecHead), SectionRule(usable_w), Spacer(1, 5)]

def role_row(title, date, usable_w):
    t = Table([[Paragraph(title, sRole), Paragraph(date, sRoleR)]],
              colWidths=[usable_w * 0.72, usable_w * 0.28])
    t.setStyle(TableStyle([
        ('VALIGN',        (0,0), (-1,-1), 'BOTTOM'),
        ('LEFTPADDING',   (0,0), (-1,-1), 0),
        ('RIGHTPADDING',  (0,0), (-1,-1), 0),
        ('TOPPADDING',    (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
    ]))
    return t


# ── Build ─────────────────────────────────────────────────────────────────────
doc = SimpleDocTemplate(str(OUT_FILE), pagesize=A4,
                        leftMargin=margin, rightMargin=margin,
                        topMargin=14*mm, bottomMargin=14*mm)
usable = W - 2 * margin
story  = []

# Header
h = cv['header']
story.append(Paragraph(h['name'], sName))
story.append(Spacer(1, 4))
story.append(Paragraph(
    f"{h['website']} &nbsp;|&nbsp; {h['email']} &nbsp;|&nbsp; "
    f"{h['linkedin']} &nbsp;|&nbsp; {h['github']} &nbsp;|&nbsp; {h['kaggle']}",
    sContact))
story.append(Spacer(1, 6))
story.append(HRFlowable(width=usable, thickness=1, color=INK, spaceAfter=10))

# Projects
story += section('PROJECTS', usable)
for p in cv['projects']:
    story.append(KeepTogether([
        Paragraph(p['name'], sProjN),
        Paragraph(p['description'], sProjD),
        Spacer(1, 5),
    ]))

# Experience
story += section('EXPERIENCE', usable)
for job in cv['experience']:
    blocks = [
        role_row(job['role'], job['period'], usable),
        Paragraph(job['company'], sCo),
        Spacer(1, 3),
    ]
    for sec in job['sections']:
        if sec['heading']:
            blocks.append(Paragraph(sec['heading'], sSubHead))
        for b in sec['bullets']:
            blocks.append(bullet(b))
    blocks.append(Spacer(1, 8))
    story.append(KeepTogether(blocks))

# Education + Awards (two-column)
col = (usable - 8) / 2

edu_content = [Paragraph('EDUCATION', sSecHead), SectionRule(col), Spacer(1, 5)]
for e in cv['education']:
    edu_content += [
        Paragraph(e['degree'], sEduDeg),
        Paragraph(f"{e['institution']} &nbsp;·&nbsp; {e['period']}", sEduSch),
        Paragraph(e['thesis'], sEduTh),
        Paragraph(e['modules'], sEduMod),
        Spacer(1, 8),
    ]

awards_content = [Paragraph('AWARDS', sSecHead), SectionRule(col), Spacer(1, 5)]
for a in cv['awards']:
    awards_content += [
        AwardBlock(a['title'], a['description'], col),
        Spacer(1, 6),
    ]

two_col = Table([[edu_content, awards_content]], colWidths=[col, col], hAlign='LEFT')
two_col.setStyle(TableStyle([
    ('VALIGN',        (0,0), (-1,-1), 'TOP'),
    ('LEFTPADDING',   (0,0), (-1,-1), 0),
    ('RIGHTPADDING',  (0,0), (0,-1),  8),
    ('RIGHTPADDING',  (1,0), (1,-1),  0),
    ('TOPPADDING',    (0,0), (-1,-1), 0),
    ('BOTTOMPADDING', (0,0), (-1,-1), 0),
]))
story.append(two_col)
story.append(Spacer(1, 10))

# Skills
story += section('SKILLS', usable)
story.append(TagCloud(cv['skills'], usable))
story.append(Spacer(1, 10))

# Publications
story += section('ACADEMIC CITATIONS', usable)
for c in cv['publications']:
    story.append(Paragraph(f'&#8627; {c}', sCite))
    story.append(Spacer(1, 4))

doc.build(story)
print(f'Done: {OUT_FILE}')
