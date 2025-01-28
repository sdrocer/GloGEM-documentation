# Configuration file for the Sphinx documentation builder.

# -- Project information

project = 'GloGEM-doc'
copyright = '2025, Beer'
author = 'Beer'

release = '1.0'
version = '1.0.0'

# -- General configuration

extensions = [
    'sphinx.ext.duration',
    'sphinx.ext.doctest',
    'sphinx.ext.autodoc',
    'sphinx.ext.autosummary',
    'sphinx.ext.intersphinx',
    'myst_parser',
]

intersphinx_mapping = {
    'python': ('https://docs.python.org/3/', None),
    'sphinx': ('https://www.sphinx-doc.org/en/master/', None),
}
intersphinx_disabled_domains = ['std']

templates_path = ['_templates'] # Add templates path in order to use custom templates for the HTML output

# -- Options for HTML output

html_theme = 'sphinx_rtd_theme'
html_static_path = ['_static']

def setup(app):
    app.add_css_file('custom.css') # add custom CSS file
    app.add_js_file('custom.js') # add custom JavaScript file

# Set the Pygments style
pygments_style = 'monokai' # Set the Pygments syntax highlighting style

# -- Options for EPUB output
epub_show_urls = 'footnote'

# Set the master doc to index.md
master_doc = 'index'