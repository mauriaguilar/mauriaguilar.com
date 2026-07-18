# Claude Code Automation Recommendations

_Generado: 2026-06-26_

## Codebase Profile
- **Tipo**: React 19 + TypeScript + Vite
- **Stack**: SPA estática, sin backend ni DB
- **Tools actuales**: ESLint, TypeScript, skills de frontend ya instalados

---

## ⚡ Hooks

### 1. Auto-lint al editar archivos `.tsx`/`.ts`
**Por qué**: Tienes ESLint configurado pero no se ejecuta automáticamente. Esto atrapa errores en el momento en que editas.

```json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Edit|Write",
      "hooks": [{
        "type": "command",
        "command": "cd /home/mau/dev/mauriaguilar.com && npm run lint --silent 2>&1 | head -20"
      }]
    }]
  }
}
```

### 2. Bloquear edición de `package-lock.json`
**Por qué**: Es fácil romper el lock file accidentalmente. Este hook previene edits directos.

```json
{
  "hooks": {
    "PreToolUse": [{
      "matcher": "Edit|Write",
      "hooks": [{
        "type": "command",
        "command": "echo \"$CLAUDE_TOOL_INPUT\" | grep -q 'package-lock' && echo 'BLOCK: No editar package-lock.json directamente' && exit 1 || exit 0"
      }]
    }]
  }
}
```

---

## 🎯 Skills

### `deploy` — Build y preview rápido
**Por qué**: Usas `npm run build` frecuentemente. Un skill encapsula el flujo completo.

Crear en `.claude/skills/deploy/SKILL.md`:

```markdown
---
name: deploy
description: Build del proyecto y verificación de tipos TypeScript
disable-model-invocation: true
---

Ejecuta en orden:
1. `npx tsc --noEmit` — verifica tipos
2. `npm run build` — genera dist/
3. Reporta el tamaño del bundle generado con `du -sh dist/`
```

Uso: `/deploy`

---

## 🔌 MCP Servers

### Playwright (browser automation)
**Por qué**: El CV es una web estática visual. Con Playwright se pueden tomar screenshots y verificar que los cambios se ven bien sin salir del IDE.

```bash
claude mcp add playwright npx @playwright/mcp@latest
```

Uso típico: _"Tomá un screenshot de la sección Skills y verificá que el layout no se rompió"_
