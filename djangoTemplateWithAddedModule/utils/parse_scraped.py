import cssutils
from bs4 import BeautifulSoup


def parse_html(raw_html):
    html = BeautifulSoup(raw_html, 'html.parser')

    div_style = html.find_all('div')

    # style = cssutils.parseStyle(div_style)
    # urlParsed = style['background-image']
    div_list = []

    for div in div_style:
        divStr = str(div)
        if 'image:url(' in divStr:
            div_list.append((divStr.split('image:url(')[1]).split(')')[0])


    return div_list