---
outline: deep
---

# Models & Providers

Starfish connects to multiple AI providers through a unified AI Gateway. You pick the model, Starfish handles routing and authentication.

## Available Models

### Anthropic

| Model | Tier | Thinking | Tools | Vision |
|-------|------|----------|-------|--------|
| Claude Opus 4.6 | Premium | Yes | Yes | Yes |
| Claude Sonnet 4.6 | Standard | Yes | Yes | Yes |
| Claude Haiku 4.5 | Fast & Cheap | No | Yes | Yes |

### OpenAI

| Model | Tier | Thinking | Tools | Vision |
|-------|------|----------|-------|--------|
| GPT-5.4 Pro | Premium | Yes | Yes | Yes |
| GPT-5.4 | Standard | Yes | Yes | Yes |
| GPT-5.3 Codex | Standard | Yes | Yes | No |
| GPT-5.4 Mini | Fast & Cheap | No | Yes | Yes |
| GPT-5.4 Nano | Ultra Cheap | No | Yes | No |

### Google

| Model | Tier | Thinking | Tools | Vision |
|-------|------|----------|-------|--------|
| Gemini 3.1 Pro | Standard | Yes | Yes | Yes |
| Gemini 3 Pro | Standard | Yes | Yes | Yes |
| Gemini 3 Flash | Fast & Cheap | No | Yes | Yes |
| Gemini 3.1 Flash Lite | Ultra Cheap | No | Yes | No |

### Other

| Model | Provider | Tier | Thinking | Tools | Vision |
|-------|----------|------|----------|-------|--------|
| GLM-5 | Z.AI | Standard | Yes | Yes | No |
| MiMo V2 Pro | Xiaomi | Standard | Yes | Yes | No |
| Grok 4.20 Reasoning | xAI | Standard | Yes | Yes | Yes |
| Kimi K2.5 | Moonshot | Standard | Yes | Yes | Yes |

## Model Capabilities

- **Thinking** -- extended reasoning mode. The model works through problems step by step before responding.
- **Tools** -- function calling. The model can invoke integrations and MCP tools.
- **Vision** -- image understanding. The model can analyze images you upload.

## Model Tiers

| Tier | Use Case |
|------|----------|
| **Premium** | Best quality. Complex reasoning, nuanced tasks. |
| **Standard** | Daily driver. Good balance of quality and speed. |
| **Fast & Cheap** | Low latency. Quick tasks, high volume. |
| **Ultra Cheap** | Lowest cost. Simple tasks, bulk processing. |

## Auto Mode

Select **Auto** in the model dropdown and Starfish picks the best model for your task based on complexity. This is the default.

## Changing Models

Open the model dropdown in the composer area. Your selection persists per session -- different conversations can use different models.

![Model selector dropdown](/images/model-selector.png)
