import { getHighlighter, setCDN } from "shiki";
import grammar from './grammar-tact.json';

setCDN('/shiki/');

export async function highlightTactCode(code: string) {
  const highlighter = await getHighlighter({ 
    theme: 'css-variables',
		paths: {
			wasm: '/'
		},
    langs: [ 'javascript', {
        id: 'tact',
        scopeName: 'source.tact',
				grammar: grammar as any,
        path: '',
      }
    ]
  });
  return highlighter.codeToHtml(code, { lang: 'tact' });
}