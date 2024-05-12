import { asText } from "@prismicio/client";
import { BlogPostDocument } from "../../../prismicio-types";

/**
 * @description Função que retorna o tempo médio de leitura de uma postagem em minutos.
 * @param post A postagem que será mensurada o tempo
 * @returns Um número que representa o tempo de leitura em minutos
 */
export function getTimeToReadAPost(post: BlogPostDocument) {
	// Mapeia em um array cada conteúdo da postagem para uma string e separa por um espaço
	const data = post.data.content
		.map(content => {
			return asText(content.body);
		})
		.join(" ");

	// Deste conteúdo, removemos toda a parte que é HTML
	const cleanContent = data.replace(/<[^>]*>/g, "");

	// Pega a string resultante e separa cada palavra em um array
	const words = cleanContent.split(/\s+/);

	// Deste array, pega o tamanho para obter o número de palavras
	const wordCount = words.length;

	// Guardamos uma constante que representa o número de palavras por minuto em média que uma pessoa consegue ler por minuto.
	const wordsPerMinute = 265;

	// Divide a quantidade de palavras pelo tempo de leitura em minutos e arredonda para o número inteiro mais proximo.
	return Math.ceil(wordCount / wordsPerMinute);
}
