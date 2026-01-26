# Lingo.dev MCP Integration - SH Constructions Dashboard

This project has been integrated with **Lingo.dev Model Context Protocol (MCP)** for automatic translation support across English, Hindi, and Kannada languages.

## 🎯 Target Languages

- **English (en)** - Source language
- **Hindi (hi)** - Target language
- **Kannada (kn)** - Target language

## 📦 Translation Tags

All headers and database-fetched strings have been wrapped in `<Trans>` components with unique translation keys. The translation tags follow this pattern:

```jsx
<Trans id="unique.key">Text to translate</Trans>
```

### Examples:

**Headers:**
```jsx
<h1><Trans id="dashboard.title">Dashboard</Trans></h1>
<h2><Trans id="services.title">Services</Trans></h2>
```

**Database-fetched strings:**
```jsx
<Trans id={`project.title.${project.id}`}>{project.title}</Trans>
<Trans id={`service.description.${service.id}`}>{service.description}</Trans>
<Trans id={`message.text.${msg.id}`}>{msg.message}</Trans>
```

## 🔧 Configuration

The project includes a `lingo.config.json` file that specifies:
- Target languages: English, Hindi, Kannada
- Source language: English
- Project name: sh-constructions

## 📝 Translation Keys Structure

Translation keys are organized by component/page:

- **Dashboard**: `dashboard.*`
- **Admin Dashboard**: `admin.*`
- **Navigation**: `nav.*`
- **Hero Section**: `hero.*`
- **Services**: `service.*`
- **Projects**: `projects.*`
- **Team**: `team.*`
- **Contact**: `contact.*`
- **Footer**: `footer.*`
- **Testimonials**: `testimonials.*`
- **Login/Register**: `login.*`, `register.*`

## 🚀 Using Lingo.dev MCP

To use Lingo.dev MCP for translation:

1. **Set up Lingo.dev MCP** in your AI tool (Cursor, Claude Desktop, or Cline):
   ```
   npx -y lingo.dev mcp <YOUR_API_KEY>
   ```

2. **Request translations** through your AI assistant:
   - The MCP will automatically detect all `<Trans>` tags
   - Request translations for all strings to Hindi and Kannada
   - The translations will be processed and stored

3. **Translation Process**:
   - All strings wrapped in `<Trans>` components are ready for translation
   - Database-fetched strings (projects, services, messages) are dynamically wrapped
   - Each string has a unique ID for tracking

## 📋 Files Modified

### Components Created:
- `frontend/src/components/Trans.jsx` - Translation wrapper component

### Components Updated:
- `frontend/src/pages/Dashboard.jsx`
- `frontend/src/pages/AdminDashboard.jsx`
- `frontend/src/pages/Login.jsx`
- `frontend/src/pages/Register.jsx`
- `frontend/src/pages/ModernHome.jsx`
- `frontend/src/components/Hero.jsx`
- `frontend/src/components/Navbar.jsx`
- `frontend/src/components/Services.jsx`
- `frontend/src/components/Projects.jsx`
- `frontend/src/components/Team.jsx`
- `frontend/src/components/Contact.jsx`
- `frontend/src/components/Footer.jsx`
- `frontend/src/components/Testimonials.jsx`

### Configuration:
- `frontend/lingo.config.json` - Lingo.dev configuration

## ✅ What's Been Wrapped

1. **All Headers** (h1, h2, h3) - Page titles, section headers
2. **Navigation Items** - Menu items, buttons
3. **Database-Fetched Strings**:
   - Project titles and descriptions
   - Service titles and descriptions
   - Message content (name, email, message text)
   - Team member names and roles
   - Testimonial text, names, and roles
4. **Form Labels & Buttons** - All user-facing text
5. **Footer Content** - Links, services, copyright text

## 🎨 Trans Component

The `Trans` component is a simple wrapper that:
- Accepts an `id` prop for unique translation keys
- Wraps children in a `<span>` with `data-lingo-id` attribute
- Renders children directly (Lingo.dev MCP processes these tags)

## 📚 Next Steps

1. Configure Lingo.dev MCP with your API key
2. Use your AI assistant to translate all wrapped strings
3. Test translations in the application
4. Deploy with multi-language support

---

**Note**: This integration is ready for the Lingo.dev hackathon. All strings are properly tagged and ready for translation via Lingo.dev MCP.


