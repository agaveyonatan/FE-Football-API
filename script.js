const PL = document.querySelector("#PL")
const PD = document.querySelector("#PD")
const SA = document.querySelector("#SA")
const CL = document.querySelector("#CL")

const preload = document.querySelector("#preload")
const league = document.querySelector("#league")
const area = document.querySelector("#area")

window.addEventListener('load', ()=>{
    preload.innerHTML = 
    `
    <div class="row">
        <div class="col">
            <div class="spinner-grow text-success" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    </div>
    `

    getData(2001);
})

PL.addEventListener('click', ()=>{
    preload.innerHTML = 
    `
    <div class="row">
        <div class="col">
            <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    </div>
    `

    getData(2021);
})

SA.addEventListener('click', ()=>{
    preload.innerHTML = 
    `
    <div class="row">
        <div class="col">
            <div class="spinner-grow text-danger" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    </div>
    `

    getData(2019);
})

PD.addEventListener('click', ()=>{
    preload.innerHTML = 
    `
    <div class="row">
        <div class="col">
            <div class="spinner-grow text-warning" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    </div>
    `

    getData(2014);
})

CL.addEventListener('click', ()=>{
    preload.innerHTML = 
    `
    <div class="row">
        <div class="col">
            <div class="spinner-grow text-success" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    </div>
    `

    getData(2001);
})

let getData =  (id) =>{
    let url = `https://api.football-data.org/v2/competitions/${id}/standings`

    fetch(url, {
        headers:  {'X-Auth-Token': 'Your Token'} //FILL YOUR TOKEN API HERE
    }).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data)

        let klub = data.standings[0].table
        // console.log(klub)

        preload.innerHTML = ``
        
        area.innerHTML = ``

        klub.forEach((club) => {
            
            area.innerHTML +=
            `  
            <div class="row bg-light outside" data-aos="slide-up" data-aos-duration="1000">
                <div class="col col-sx-12 col-md-6">
                    <img src="${club.team.crestUrl}" class="logo" alt="${club.team.name}">
                </div>
                <div class="col col-sx-12 col-md-6">
                    <span class="team detailed">${club.team.name} - <b>${club.points} pts</b></span>
                    <span class="right rank">#${club.position}</span><br/>
                    <span class="statistic bg-success text-light detailed stat"><b>Won :</b> ${club.won}</span>
                    <span class="statistic bg-warning text-light stat"><b>Draw :</b> ${club.draw}</span>
                    <span class="statistic bg-danger text-light stat" ><b>Lost :</b> ${club.lost}</span><br/><br/>
                    <i class="fa fa-clock detailed"></i><span class="statistic text-dark addition" ><b>Played Games :</b> ${club.playedGames}</span><br/>
                    <i class="fa fa-futbol detailed" aria-hidden="true"></i><span class="statistic text-dark addition" ><b>Goals :</b> ${club.goalsFor}</span>
                </div>
            </div>
            `
        });

        if(id==2021){
            league.innerHTML = 
            `
                <div class="row" data-aos="fade-down" data-aos-duration="1000">
                    <div class="col bg-primary competition"><br/>
                        <h3 class="text-light competition-name">${data.competition.name}</h3><br/>
                        <span class="text-light description">Start date : ${data.season.startDate}</span><br/>
                        <span class="text-light description">End date : ${data.season.endDate}</span><br/>
                        <span class="text-light description">Match Day : ${data.season.currentMatchday}</span><br/>
                        <span class="text-light country">Country : ${data.competition.area.name}
                    </div>
                </div>
            `
        }else if(id==2019){
            league.innerHTML = 
            `
                <div class="row" data-aos="fade-down" data-aos-duration="1000">
                    <div class="col bg-danger competition"><br/>
                        <h3 class="text-light competition-name">${data.competition.name}</h3><br/>
                        <span class="text-light description">Start date : ${data.season.startDate}</span><br/>
                        <span class="text-light description">End date : ${data.season.endDate}</span><br/>
                        <span class="text-light description">Match Day : ${data.season.currentMatchday}</span><br/>
                        <span class="text-light country">Country : ${data.competition.area.name}
                    </div>
                </div>
            `
        }else if(id==2014){
            league.innerHTML = 
            `
                <div class="row" data-aos="fade-down" data-aos-duration="1000">
                    <div class="col bg-warning competition"><br/>
                        <h3 class="text-light competition-name">${data.competition.name}</h3><br/>
                        <span class="text-light description">Start date : ${data.season.startDate}</span><br/>
                        <span class="text-light description">End date : ${data.season.endDate}</span><br/>
                        <span class="text-light description">Match Day : ${data.season.currentMatchday}</span><br/>
                        <span class="text-light country">Country : ${data.competition.area.name}
                    </div>
                </div>
            `
        }else{
            league.innerHTML = 
            `
                <div class="row" data-aos="fade-down" data-aos-duration="1000">
                    <div class="col bg-success competition"><br/>
                        <h3 class="text-light competition-name">${data.competition.name}</h3><br/>
                        <span class="text-light description">Start date : ${data.season.startDate}</span><br/>
                        <span class="text-light description">End date : ${data.season.endDate}</span><br/>
                        <span class="text-light description">Match Day : ${data.season.currentMatchday}</span><br/>
                        <span class="text-light country">Country : ${data.competition.area.name}
                    </div>
                </div>
            `
        }
    })
}