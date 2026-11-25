# FINWISE - Build & Embed Script
# Bundles all modular files into an inline Babel script inside index.html for 100% offline & file:/// compatibility

import os

def build():
    files = [
        'js/data/schemesData.js',
        'js/data/demoData.js',
        'js/data/literacyData.js',
        'js/utils/formatters.js',
        'js/utils/sound.js',
        'js/utils/canvas3d.js',
        'js/components/Navbar.js',
        'js/components/Hero.js',
        'js/components/Dashboard.js',
        'js/components/BudgetPlanner.js',
        'js/components/SavingsPlanner.js',
        'js/components/SchemeFinder.js',
        'js/components/LiteracyHub.js',
        'js/components/Assistant.js',
        'js/components/Modals.js',
        'js/components/Footer.js',
        'js/app.js'
    ]

    bundle_parts = []
    for f in files:
        with open(f, 'r', encoding='utf-8') as fp:
            bundle_parts.append(f"// =================== {f} ===================\n" + fp.read())

    full_bundle = "\n\n".join(bundle_parts)

    with open('index.html', 'r', encoding='utf-8') as fp:
        html = fp.read()

    marker_start = "  <!-- Data Scripts -->"
    marker_end = "</body>"

    idx1 = html.find(marker_start)
    idx2 = html.find(marker_end)

    if idx1 == -1 or idx2 == -1:
        print("ERROR: Could not locate script markers in index.html")
        return

    script_tag = f"""  <!-- FINWISE Core Application Bundle (Supports both file:/// direct click & http:// server) -->
  <script type="text/babel">
{full_bundle}
  </script>
"""

    updated_html = html[:idx1] + script_tag + html[idx2:]

    with open('index.html', 'w', encoding='utf-8') as fp:
        fp.write(updated_html)

    print(f"SUCCESS: Embedded {len(full_bundle)} bytes of application code into index.html")

if __name__ == '__main__':
    build()
