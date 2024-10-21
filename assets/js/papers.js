$.get('/data/papers.yml').done(
	function (data) {
		var papers = jsyaml.load(data);
		// console.log(papers);
		var $header = $("#research div.container header");

		// var $row = $("<div>", {class: "row aln-center"});
		var $row = $("<div>", {class: "research-container"});
		for (yid in papers){
			var papers_by_year = papers[yid]["papers"]
			for (pid in papers_by_year){
				var paper = papers_by_year[pid];
				// skip external papers
				if (paper["external"]) {
					continue;
				}

				// console.log(paper)
				var $div = $("<div>");
				var $article = $("<article>", {class: "paper-card"});

				var link = paper["link"];
				if (paper["blog"]) {
					link = paper["blog"];
				}
				$article.append($("<h3>").append(
					$("<a>", {href: link}).text(paper["title"])
				));
				var $p = $("<p>").text(paper["authors"])
				if (paper["short"]){
					// console.log(paper["short"]);
					$p.prepend($("<em>").html(paper["short"] + "<br />"));
				} 

				var firstline = true;
				if (paper["link"]) {
					if (firstline){
						$p.append($("<br>"));
						firstline = false;
					}
					$p.append($("<a>", {href: paper["link"], class:"paper-link"}).text("arxiv"));
				}
				if (paper["website"]) {
					if (firstline){
						$p.append($("<br>"));
						firstline = false;
					} else {
						$p.append($("<span>", {class: "spacer"}).html("&#183;"));
					}
					$p.append($("<a>", {href: paper["website"], class:"paper-link"}).text("website"));
				}
				if (paper["blog"]) {
					if (firstline){
						$p.append($("<br>"));
						firstline = false;
					} else {
						$p.append($("<span>", {class: "spacer"}).html("&#183;"));
					}
					$p.append($("<a>", {href: paper["blog"], class:"paper-link"}).text("blog"));
				}
				if (paper["github"]) {
					if (firstline){
						$p.append($("<br>"));
						firstline = false;
					} else {
						$p.append($("<span>", {class: "spacer"}).html("&#183;"));
					}
					$p.append($("<a>", {href: paper["github"], class:"paper-link"}).text("github"));
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
