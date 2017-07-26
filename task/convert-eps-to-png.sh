mogrify -format png -colorspace sRGB -background transparent -crop 450x450+30+30 ./data/eps/*.eps
find ./data/eps -name "*.png" | xargs -J % mv % ./data/images
