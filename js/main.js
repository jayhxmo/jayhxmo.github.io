function loadProjects(loadTarget) {
	console.log(loadTarget);
	$('.filter li').removeClass();
	$('#filter-' + loadTarget).addClass('active');

	switch (loadTarget) {
		case 'all':
			renderProjects(featured);
			break;

		case 'all-more':
			addProjects();
			break;

		case 'design':
			renderProjects(design);
			break;

		case 'dev':
			renderProjects(dev);
			break;

		case 'hackathon':
			renderProjects(hackathon);
			break;
	}
}

function renderProjects(projects) {
	$('.js-project--container').html('');
	$('.js-project--container').html(projects);
}

function addProjects() {
	var projectHtml = $('.js-project--container').html();
	$('.js-project--container').html(projectHtml + all);
}