import { proyects } from "./data";

const loadProyects = () => {
  let $proyectsContainer = document.querySelector(".proyects");

  let $proyectsLoaded = "";
  proyects.forEach(({ link, name, id, thumbail }) => {
    $proyectsLoaded += `<li class="proyects__proyect">
	  <a href="${link}" target="_blank">
		<img src="${thumbail}" alt="${name}" />
	  </a>
	</li>`;
  });

  $proyectsContainer.innerHTML = $proyectsLoaded;
};

loadProyects();
