document.querySelectorAll('.poem li').forEach((line) => {
    const x = Math.random() * window.innerWidth * 0.8;
    const y = Math.random() * window.innerHeight * 0.8;
    line.style.transform = `translate(${x}px, ${y}px)`;
  });

/*
Hi Queena!!

             ,-._
           _.-'  '--.
         .'      _  -`\_
        / .----.`_.'----'
        ;/     `
       /_;

    ._      ._      ._      ._
_.-._)`\_.-._)`\_.-._)`\_.-._)`\_.-._

*/
