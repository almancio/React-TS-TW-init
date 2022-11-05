<p align="center">
  <a href="" rel="noopener">
 <img width=181px height=75px src="https://www.gva.es/portal-gva61-theme/images/GVA/logo_gva.png" alt="Generalitat valenciana"></a>
</p>

<h3 align="center">Plantilla de nuevos evolutivos React</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)

</div>

---

<p align="center"> Plantilla inicial para proyectos de la GVA con React
    <br> 
</p>

## 📝 Tabla de contenidos

- [Sobre el proyecto](#about)
- [Cómo empezar](#getting_started)
- [Uso](#usage)
- [Tests](#tests)
- [Despliegue](#deployment)
- [Tecnologías](#built_using)

## 🧐 Sobre el proyecto <a name = "about"></a>

Este proyecto trata de servir como guía a partir de la cual empezar los proyectos que se vayan a desarrollar para la GVA con la librería react. También puede servir como guia este propio README para su modificación a lo largo del ciclo de desarrollo

## 🏁 Cómo empezar <a name = "getting_started"></a>

Estas instrucciones irán cambiando comforme se vayan añadiendo funcionalidades al proyecto. Ver [despliegue](#deployment) para ver las notas de como desplegar la aplicación en entorno de desarrollo.

### Prerrequisitos

Tener Node.js instalado [Página oficial](https://nodejs.org/en/)

Entorno recomendado para mejorar la productividad y hacer un correcto uso de las configuraciones de eslint,prettier...
VSCode como IDE con los siguientes plugins:

- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) Auto renombramiento de etiquetas correspondientes
- [DotEnv](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) Resalto de sintaxis para archivos de entorno
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) Muestreo de errores de compilación, sintaxis, lógicos...
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) analiza estáticamente el código para encontrar rápidamente los problemas
- [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css) Soporte para HTML,CSS
- [IntelliCode](https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode) Atucompletado de lenguajes típicos JS,HTML,CSS...
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) Formateador de código
- [Tailwind CSS Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) Autocompletado para tailwind
- [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) Cliente para pruebas de API

- [Fuente (Hack Nerd Font Mono)](https://github.com/ryanoasis/nerd-fonts)

Configuración recomendada de VSCode (settings.json)

```json
{
	"editor.cursorStyle": "line-thin",
	"terminal.integrated.fontFamily": "Hack Nerd Font Mono",
	"[javascript]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"workbench.startupEditor": "none",
	"terminal.integrated.fontSize": 13,
	"explorer.confirmDelete": false,
	"editor.fontFamily": "MonoLisa,Menlo, Monaco, 'Courier New', monospace",
	"editor.stickyScroll.enabled": true,
	"[json]": {
		"editor.defaultFormatter": "vscode.json-language-features"
	},
	"editor.accessibilitySupport": "off",
	"editor.cursorBlinking": "expand",
	"terminal.integrated.env.osx": {
		"FIG_NEW_SESSION": "1"
	},
	"editor.defaultFormatter": "esbenp.prettier-vscode",
	"editor.formatOnSave": true,
	"editor.bracketPairColorization.independentColorPoolPerBracketType": true
}
```

Herramientas necesarias para iniciar el proyecto:

```sh
npx husky install
```

### Instalación

Una vez tenemos el entorno listo, iniciamos la instalación de las dependencias

```sh
npm install
```

## 🎈 Uso <a name="usage"></a>

Para realizar el arranque desde en entorno de pruebas en local.

```sh
npm run dev
```

## 🔧 Ejecutando los tests <a name = "tests"></a>

Los tests estan divididos en dos categorias (end to end y unitarios)

### end to end tests

Estos test ejecutan pruebas desde inicio hasta final de la aplicación checkeando el resultado en UI

```sh
npm run test
```

## 🚀 Deslpiegue <a name = "deployment"></a>

Para el correcto despliegue de la aplicación en el SVN de la GVA tenemos que ejecutar el siguiente comando.

```sh
npm run build
```

## ⛏️ Tecnologías <a name = "built_using"></a>

- [Vite](https://vitejs.dev/) - Builder
- [React](https://reactjs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [TypeScript](https://www.typescriptlang.org/) - Language
- [Tailwind](https://tailwindcss.com/) - Styles
