#!/bin/bash

generate_svg_components() {
  local input_dir="$1"
  local output_dir="$2"
  local component_name="$3"

  # Check if the SVG component already exists in the output directory
  if [ -f "$output_dir/$component_name.tsx" ]; then
    # If the SVG component exists, skip SVGR command
    echo "SVG component $component_name already exists in $output_dir. Skipping SVGR for $input_dir"
  else
    # If the SVG component doesn't exist, run SVGR command
    svgr --icon --typescript --out-dir "$output_dir" --ext tsx --filename-case kebab "$input_dir"
  fi
}

# Generate SVG components for each directory
generate_svg_components "src/icons/micro" "src/components/icons/micro" "Micro"
generate_svg_components "src/icons/small" "src/components/icons/small" "Small"
generate_svg_components "src/icons/default" "src/components/icons/default" "Default"
