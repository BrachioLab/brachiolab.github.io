$.get('/data/group.yml').done(
	function (data) {
		var people = jsyaml.load(data);
		var $header = $("#people div.container header");

		// var $row = $("<div>", {class: "row aln-center"});
		var $row = $("<div>", {class: "person-flex-box"});
		for (i in people){
			var person = people[i];

			if (!person["next"]){
				var $div = $("<div>", {class: "person-card "});
				var $section = $("<section>", {class: "card-style"});
	
				var $span = $("<span>", {class: "portrait"}); 
				var $img = $("<img>", {src: person["photo"]});
				$span.append($img);
	
				var $h4 = $("<h4>", {class: "person-name"}).append(
					$("<a>", {href: person["url"]})
					.append(document.createTextNode(person["first_name"]))
						.append($("<span>", {class: "icon-text-wrapper"})
							.append(document.createTextNode(person["last_name"]))
							.append($("<img>", {
								src: "assets/img/Link_Icon.svg",
								class: "inline-icon",
							}))
					)
				);
				var $p = $("<p>").text(person["role"]);
	
				if (person["coadvisor"]) {
					$p.append("<br> Co-advised with ")
					$p.append($("<a>", {href: person["coadvisor_url"]}).text(person["coadvisor"]))
				}
	
				$section.append($span, $h4, $p);
				$div.append($section);
				$row.append($div);
			}

		}
		$header.after($row);
	});


$.get('/data/group.yml').done(
	function (data) {
		var people = jsyaml.load(data);
		var $header = $("#alumni div.container header");

		// var $row = $("<div>", {class: "row aln-center"});
		var $row = $("<div>", {class: "person-flex-box"});
		for (i in people){
			var person = people[i];

			if (person["next"]){
				var $div = $("<div>", {class: "person-card "});
				var $section = $("<section>", {class: "card-style"});
	
				var $span = $("<span>", {class: "portrait"}); 
				var $img = $("<img>", {src: person["photo"]});
				$span.append($img);
	
				var $h4 = $("<h4>", {class: "person-name"}).append(
					$("<a>", {href: person["url"]})
					.append(document.createTextNode(person["first_name"]))
						.append($("<span>", {class: "icon-text-wrapper"})
							.append(document.createTextNode(person["last_name"]))
							.append($("<img>", {
								src: "assets/img/Link_Icon.svg",
								class: "inline-icon",
							}))
					)
				);
				var $p = $("<p>").text(person["next"]);
	
				if (person["coadvisor"]) {
					$p.append("<br> Co-advised with ")
					$p.append($("<a>", {href: person["coadvisor_url"]}).text(person["coadvisor"]))
				}
	
				$section.append($span, $h4, $p);
				$div.append($section);
				$row.append($div);
			}

		}
		$header.after($row);
	});
