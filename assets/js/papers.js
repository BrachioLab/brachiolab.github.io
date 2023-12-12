$.get('/assets/data/papers.yml').done(
	function (data) {
		var papers = jsyaml.load(data);
		// console.log(papers);
		var $header = $("#research div.container header");

		// var $row = $("<div>", {class: "row aln-center"});
		var $row = $("<div>", {class: "row"});
		for (yid in papers){
			var papers_by_year = papers[yid]["papers"]
			for (pid in papers_by_year){
				var paper = papers_by_year[pid];
				// console.log(paper)
				var $div = $("<div>", {class: "col-4 col-6-medium col-12-small"});
				var $article = $("<article>", {class: "box style1"});

				var link = paper["link"];
				if (paper["blog"]) {
					link = paper["blog"];
				}
				$article.append($("<h3>").append(
					$("<a>", {href: link}).text(paper["title"])
				));

				var $p = $("<p>").text(paper["authors"])
				if (paper["conference"]){
					// console.log(paper["short"]);
					$p.prepend($("<em>").html(paper["short"] + "<br />"));
				} 

				var firstline = true;
				if (paper["link"]) {
					if (firstline){
						$p.append($("<br>"));
						firstline = false;
					}
					$p.append($("<a>", {href: paper["link"]}).text("arxiv"));
				}
				if (paper["blog"]) {
					if (firstline){
						$p.append($("<br>"));
						firstline = false;
					} else {
						$p.append($("<span>", {class: "spacer"}).html("&#183;"));
					}
					$p.append($("<a>", {href: paper["blog"]}).text("blog"));
				}
				if (paper["github"]) {
					if (firstline){
						$p.append($("<br>"));
						firstline = false;
					} else {
						$p.append($("<span>", {class: "spacer"}).html("&#183;"));
					}
					$p.append($("<a>", {href: paper["github"]}).text("github"));
				}
				// console.log($arxiv)
				// $p.append($arxiv, $blog, $github);
				$article.append($p);

				$div.append($article);
				$row.append($div);
			}
		}
		$header.after($row);
	});
