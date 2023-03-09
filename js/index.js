const handleCards = () => {
    const dailyBtn = document.querySelector('#daily')
    const weeklyBtn = document.querySelector('#weekly')
    const monthly = document.querySelector('#monthly')
    const container = document.querySelector('.container')

    const fetchingData = async () => {
        const response = await fetch('data.json')
        const data = await response.json()
        return data
    }

    const createCards = async () => {
        const data = await fetchingData()
        let card = document.createElement('div')
        let cardTtile = document.createElement('h2')
        let cardTime = document.createElement('p')
        let dots = document.createElement('button')
        let info = document.createElement('p')
        let infoPrimary = document.createElement('div')
        let infoSecondary = document.createElement('div')
        let work = document.createElement('div')
        let play = document.createElement('div')
        let study = document.createElement('div')
        let exerxise = document.createElement('div')
        let social = document.createElement('div')
        let selfCare = document.createElement('div')

        card.classList.add('actions')
        dots.classList.add('dots')
        infoPrimary.classList.add('info-primary')
        info-infoSecondary.classList.add('info-secondary')

        container.appendChild(card)
        card.appendChild(infoPrimary)
        infoPrimary.appendChild(cardTtile)
        infoPrimary.appendChild(cardTime)
        card.appendChild(infoSecondary)
        infoSecondary.appendChild(dots)
        infoSecondary.appendChild(info)
    }
    createCards()
}
handleCards()