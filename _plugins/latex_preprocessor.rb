=begin
Preprocess the markdown files before Jekyll converts them to HTML.

We replace all single-dollar sign inline math delimiters $x + 1$ with $$x + 1$$,
since the former is not recognized by the kramdown renderer. Otherwise, kramdown
incorrectly interprets markdown special characters like underscores:

$x_1 + x_2$

as italics, breaking the latex math.
=end

module Jekyll
  class LatexPreprocessor < Generator
    def generate(site)
      puts " AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA "
      site.pages.each do |page|
        process_page(page)
      end
    end

    def process_page(page)
      content = page.content
      modified_content = preprocess_dollar_signs(content)
      page.content = modified_content
    end

    # replace single dollar signs  (dollar signs that are not preceded or
    # followed by another dollar sign) with double dollar signs
    def preprocess_dollar_signs(content)
      content.gsub(/(?<!\$)\$(?!\$)/, "$$")
    end
  end
end
