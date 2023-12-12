$.get('/assets/data/group.yml').done(
	function (data) {
		var people = jsyaml.load(data);
		var $header = $("#people div.container header");

		// var $row = $("<div>", {class: "row aln-center"});
		var $row = $("<div>", {class: "row"});
		for (i in people){
			var person = people[i];
			var $div = $("<div>", {class: "col-4 col-6-medium col-12-small"});
			var $section = $("<section>", {class: "box style1"});

			var $span = $("<span>", {class: "featured image"}); 
			var $img = $("<img>", {src: person["photo"]});
			$span.append($img);

			var $h3 = $("<h3>").append($("<a>", {href: person["url"]}).text(person["name"]));
			var $p = $("<p>").text(person["role"]);

			console.log(person["coadvisor"])
			if (person["coadvisor"]) {
				$p.append("<br> Co-advised with ")
				$p.append($("<a>", {href: person["coadvisor_url"]}).text(person["coadvisor"]))
			}

			$section.append($span, $h3, $p);
			$div.append($section);
			$row.append($div);
		}
		$header.after($row);
	});
