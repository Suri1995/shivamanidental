#!/usr/bin/env python3
import shutil
import os
from pathlib import Path

src_ui = Path("/vercel/share/v0-project/src/components/ui")
dest_ui = Path("/vercel/share/v0-project/components/ui")

# Create destination if it doesn't exist
dest_ui.mkdir(parents=True, exist_ok=True)

# Copy all UI component files
if src_ui.exists():
    for file in src_ui.glob("*.tsx"):
        dest_file = dest_ui / file.name
        if not dest_file.exists():  # Only copy if it doesn't exist
            shutil.copy2(file, dest_file)
            print(f"Copied {file.name}")
        else:
            print(f"Skipped {file.name} (already exists)")
else:
    print(f"Source directory {src_ui} does not exist")

print("UI components migration complete!")
