import os
import subprocess

def open_images_in_directory(directory_path):
    # Supported image extensions
    image_extensions = {".jpg", ".jpeg", ".png"}

    try:
        # List all files in the directory
        files = os.listdir(directory_path)

        # Filter files with supported image extensions
        images = [f for f in files if os.path.splitext(f)[1].lower() in image_extensions]

        if not images:
            print("No images found in the directory.")
            return

        # Loop through images and run the terminal command to open them
        for image in images:
            image_path = os.path.join(directory_path, image)
            print(f"Opening: {image_path}")
            
            # Command to open the image (using xdg-open as an example)
            subprocess.run(["cwebp", "-q", "80", image_path, "-o", image_path.rsplit(".", 1)[0] + ".webp"])

    except Exception as e:
        print(f"Error: {e}")

# Directory containing images
directory = "/home/naveen/Documents/Github/abhisarga/public/assets/AboutUs"  # Replace with your directory path
open_images_in_directory(directory)
