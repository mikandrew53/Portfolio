class UI {
    constructor (){
        this.sort = {
            description: '<p>Built an application that visualizes popular sorting algorithms. I implemented merge sort, quick sort, and bubble sort. Spacetime complexity was kept in mind when writing the algorithms.</p>',
            github: 'https://github.com/mikandrew53/Sorting-Visualizer',
            header: 'Sorting Visualizer',
            demo: 'https://xenodochial-kare-dde6be.netlify.com/'

        };
        this.weather = {
            description: '<p>Built a weather app to display current and past weather for various cities using the ‘metaweather’ api. The app is optimized o make the minimum amount of http requests in order to decrease traffic on the backend server.</p>',
            github: 'https://github.com/mikandrew53/Weather-App',
            header: 'Weather App',
            demo: 'https://nervous-lamarr-1e19ac.netlify.com'
        }
        this.shop = {
            description: '<p>Built an online store that with a dynamically updating shopping cart. Implemented a rounding class to round the cost of the items in the cart</p>',
            github: 'https://github.com/mikandrew53/Online-Shoping-Store',
            header: 'Online Shopping Store',
            demo: 'https://silly-cori-c0bbc8.netlify.com/'
        }
    }

    paintModal(projectName){
        if(projectName === 'sort') this.paintModalBody(this.sort);
        else if (projectName === 'weather') this.paintModalBody(this.weather);
        else this.paintModalBody(this.shop);
        this.displayModal();
    }

    displayModal(){
        document.querySelector('.modal').style.display = "block";
        document.querySelector('.overlay').style.display = "block";
    }

    paintModalBody(project){
        document.querySelector('.title').innerHTML = project.header;
        document.querySelector('.modal-body').innerHTML = `
        <div>${project.description}</div>
        <div class = modal-btn>
            <a href="${project.demo}" class="btn-dark" target="_blank">Live Demo</a>
            <a href="${project.github}" class="btn-dark" target="_blank">Source Code</a>
        </div>`;
    }
}
