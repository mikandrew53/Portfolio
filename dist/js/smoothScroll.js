class SmoothScroll {
    smoothScroll(target_id_or_class, duration){
        let target = document.querySelector(target_id_or_class);
        let targetPosition = target.getBoundingClientRect().top;
        let startPosition = window.pageYOffset;
        let distance = targetPosition - startPosition;
        let startTime = null;

        let animation = (currentTime) => {
            if(startTime === null) startTime = currentTime;
            let timeElapsed = currentTime - startTime;
            let run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0,run);
            if(timeElapsed < duration) requestAnimationFrame(animation);
        }
        
        function ease (t, b, c, d){
            t /= d/2;
            if(t < 1) return c/2*t*t+b;
            t--;
            return -c/2*(t*(t-2)-1)+b;
        }
        requestAnimationFrame(animation);
    }
}