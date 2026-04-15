---
outline: deep
---

# Image Generation

Create images from text descriptions directly within Starfish. Choose from multiple models depending on your speed and quality needs.


## Available Models

| Model | Strengths | Best For |
|-------|-----------|----------|
| **nano-banana-pro** | Fast generation | Quick iterations, drafts, exploring ideas |
| **gpt-image** | Balanced quality and speed | General-purpose image creation |
| **seedream** | Highest quality output | Final assets, detailed illustrations |

## How to Use

1. **Create a session**: Click the Image Generation option in the sidebar to start a new session
2. **Describe your image**: Type a natural language description of what you want
3. **Upload a reference** *(optional)*: Attach an image for image-to-image editing or style matching
4. **Select model and quality**: Choose the model that fits your use case
5. **Generate**: Click generate and wait for the result


## Multi-Turn Refinement

Image generation sessions support multi-turn conversations. After generating an image, you can:

- Describe specific changes ("make the background darker")
- Request variations ("same composition but in watercolor style")
- Adjust details ("remove the text in the top-left corner")

The AI retains context from previous turns, so you refine without starting over.

## Saving Images

Generated images can be saved to your local filesystem. Click the save button on any generated image and choose the destination folder.

## Backend

Image generation is powered by [FAL.ai](https://fal.ai). All processing happens on FAL's infrastructure -- no local GPU required.
