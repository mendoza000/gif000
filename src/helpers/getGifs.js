export const getGifs = async (cat) => {

		const key = '2bq5RDk9R40CpqbC7TzrQVPdq930lVFR'
		const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(cat)}&limit=10&lang=es&api_key=${key}`

		const resp = await fetch(url)
		if(!resp.ok) return
		const {data} = await resp.json()

		const gifs = data.map(elem => {

			return({
				title: elem.title,
				id: elem.id,
				url: elem.images?.downsized_medium.url
			})

		})
		return gifs
	}