🧪 Playwright BDD Framework con Page Object Model (POM)
Este proyecto es un framework de automatización de pruebas E2E usando:

✅ Playwright

✅ Cucumber.js

✅ BDD con lenguaje Gherkin

✅ Patrón Page Object Model

✅ Principios SOLID y POO: Encapsulación, Herencia, Polimorfismo

📦 Estructura del Proyecto
bash
Copy
playwright-pom-bdd/
├── features/
│   ├── login.feature               # Escenarios BDD
│   └── step_definitions/
│       └── steps.ts                # Implementación de pasos
├── pages/
│   └── LoginPage.ts                # Page Object
├── support/
│   ├── hooks.ts                    # Before/After Hooks
│   └── world.ts                    # Custom World con Page
├── tsconfig.json
├── package.json
⚙️ Requisitos
Node.js 18 o superior

npm o yarn

🚀 Instalación
bash
Copy
npm install
🧪 Cómo Ejecutar las Pruebas
bash
Copy
npm run bdd
🧱 Características
✅ Navegación a páginas

✅ Login con credenciales válidas

✅ Maximizar pantalla

✅ Verificar títulos y URLs

✅ Esperas implícitas y explícitas con page.waitForSelector, expect

✅ Encapsulación con clases por página

✅ Herencia para páginas reutilizables

✅ Polimorfismo al sobrescribir métodos de páginas base

🧪 Ejemplo de Page Object
ts
Copy
export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://example.com/login');
  }

  async login(email: string, password: string) {
    await this.page.fill('input[type="email"]', email);
    await this.page.fill('input[type="password"]', password);
    await this.page.click('button[type="submit"]');
  }

  async assertLoginSuccess() {
    await this.page.waitForSelector('.profile-page');
  }
}
🎯 Principios SOLID y POO Aplicados
S: Cada Page Object tiene una responsabilidad única.

O: Clases abiertas para extensión (herencia), cerradas para modificación.

L: Las clases hijas pueden sustituir a sus padres sin romper comportamiento.

I: Interfaces implícitas por comportamiento.

D: Las dependencias (page) se inyectan a través del constructor.

🙋 Autor
Eduardo Torres
