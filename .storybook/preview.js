import '../styles/reset.css';
import '../styles/settings.css';
import '../styles/globals.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <div class="s-common s-light-theme-v2" style={{padding: '10px'}}><Story /></div>
  )
]