const linkIndex = "/mrss";
// Create toast using jsFrame
const createToast = (position, content) => {
  const jsFrame = new JSFrame();

  const frame = jsFrame.showToast({
    left: position.left + 50,
    top: position.top - 30,
    width: 350,
    height: 30,
    duration: 1000,
    html: `<span style="color:white;">${content}</span>`,
  });
};

$(document).ready(function () {
  check_visited_links();
  $.support.cors = true;

  getCoin();
  getSJC();
});

const getCoin = () => {
  let el = document.getElementById("side_bar_search");
  el.insertAdjacentHTML("beforeend", `<p id="coinLoading">Fetching Coin Data...</p>`);
  $.ajax({
    url: linkIndex + "/getCoin",
    type: "POST",
    dataType: "json",
    success: function (data) {
      document.getElementById("coinLoading").remove();
      el.insertAdjacentHTML("beforeend", getTemplateCoin(data));
    },
    error: function (jqXHR, textStatus, err) {
      alert("text status " + textStatus + ", err " + err);
    },
  });
};

const getSJC = () => {
  let el = document.getElementById("side_bar_search");
  el.insertAdjacentHTML("beforeend", `<p id="sjcLoading">Fetching SJC Data...</p>`);
  $.ajax({
    url: linkIndex + "/getSJC",
    type: "POST",
    dataType: "json",
    success: function (data) {
      document.getElementById("sjcLoading").remove();
      el.insertAdjacentHTML("beforeend", getTemplateSJC(data));
    },
    error: function (jqXHR, textStatus, err) {
      alert("text status " + textStatus + ", err " + err);
    },
  });
};

$(document).on("click", ".rss-sources-select-all", function () {
  $("#rss-categories-container :checkbox:not([disabled])").attr("checked", true);
});

$(document).on("click", ".rss-sources-select-all", function () {
  $("#rss-categories-container :checkbox:not([disabled])").attr("checked", true);
});

// handle when user clicks on 1 rss category (parent checkbox), it will check / uncheck all children checkboxes
$(document).on("change", ".rssCategory", function () {
  var c = this.checked;
  $(this).parent().find("input[type='checkbox']").prop("checked", c);
});

/* 
  Handle link visited
  using document on click for event delegation, otherwise the appended element won't work after
*/
$(document).on("click", "a.item-title", check_visited_links);

// fetch read / unread
$(document).on("click", "button.filter-read", (e) => handleFilterRead(e, true));
$(document).on("click", "button.filter-unread", (e) => handleFilterRead(e, false));

function handleFilterRead(e, isRead) {
  e.preventDefault();
  e.stopPropagation();

  let links = document.querySelectorAll("div.rss-article-item");

  links.forEach((link, index) => {
    let visited = link.getElementsByClassName("visited");
    let arr = Array.from(visited);
    if (isRead) {
      if (link.classList.contains("noshow") && arr.length != 0) {
        link.classList.remove("noshow");
      }
      if (arr.length == 0) {
        link.classList.add("noshow");
      }
    } else {
      if (link.classList.contains("noshow") && arr.length == 0) {
        link.classList.remove("noshow");
      }
      if (arr.length != 0) {
        link.classList.add("noshow");
      }
    }
  });
}

// fetch more
$(document).on("click", "a.fetch-more", handleFetchMore);

function handleFetchMore(e) {
  e.preventDefault();
  e.stopPropagation();

  let thisElement = $(this);
  let el = this;

  $.ajax({
    url: this.href, // current href of the button
    type: "POST",
    dataType: "json",
    success: function ({ rssSources, params }) {
      let ancestor = el.parentElement.parentElement;
      let parentContainer = ancestor.children[0];

      let temp = ancestor.querySelectorAll("a.item-title");

      let hrefs = [];
      for (let i = 0; i < temp.length; i++) {
        hrefs.push(temp[i].href);
      }

      let template = ``;
      let count = 0;
      rssSources.forEach((source, index) => {
        let items = source.rssData.items;

        for (let i = 0; i < items.length; i++) {
          //when there is no more post to feed
          if (
            i == items.length - 1 &&
            // hrefs.some((href) => href == items[i].link) &&
            index === rssSources.length - 1
          ) {
            let position = $(thisElement).offset();
            createToast(position, "No more post to feed");
            // break;
          }

          // when this post is already on the list
          if (hrefs.some((href) => href == items[i].link)) continue;

          // when this post does not match the keyword search
          if (items[i].title.toUpperCase().includes(params.keyword.toUpperCase()) == false) continue;

          // fetch 1 more each time per category
          if (count === 2) break;

          //add more post to template, so that it will be append into the last item
          template += `
                <div class="rss-article-item">
                  ${handleRenderImage(items[i].link, items[i].content)}
                  ${handleRenderItemInfo(items[i], source.rssData, params)}
                </div>
      		`;

          count++;
        }
      });

      parentContainer.insertAdjacentHTML("beforeend", template);
      check_visited_links();
    },
    error: function (jqXHR, textStatus, err) {
      alert("text status " + textStatus + ", err " + err);
    },
  });
}

function handleRenderImage(link, content) {
  let image = content
    .match(/<img [^>]*src="[^"]*"[^>]*>/gm)
    .map((x) => x.replace(/.*src="([^"]*)".*/, "$1"))[0];

  return `
				<div class="rss-article-image">     
					<a href=${link} target="_blank"> 
						<img class="img-responsive img-rounded" src=${image} />  
					</a>      
        </div>
      `;
}

function handleRenderItemInfo(item, rssData, params) {
  return `
      <div class="rss-article-info">
        <div class="d-flex">        
					<h5 class="mr-2"> 
						<a href=${item.link} target="_blank" class="item-title">
							${highlightText(item.title, params.keyword)}
						</a>	
					</h5>	
        </div>
        <div class="info">
          <span class=" ">${item.pubDate}</span>
          <span class="label label-danger ml-3">${rssData.generator}</span>            
        </div>
        <p class="lead description paragraph-content">
          ${highlightText(item.contentSnippet, params.keyword)}
					<br />
				</p>             
      </div>           
    `;
}

function highlightText(text, keyword) {
  if (keyword) {
    let highlighted = text.replace(new RegExp(keyword, "i"), `<span class="highlight-text">$&</span>`);

    return `${highlighted}`;
  } else return text;
}

function check_visited_links() {
  let visited_links = JSON.parse(localStorage.getItem("visited_links")) || [];
  let links = document.querySelectorAll("a.item-title");

  for (var i = 0; i < links.length; i++) {
    let that = links[i];
    that.onclick = function () {
      let clicked_url = this.href;
      if (visited_links.indexOf(clicked_url) == -1) {
        visited_links.push(clicked_url);
        localStorage.setItem("visited_links", JSON.stringify(visited_links));
      }
    };
    if (visited_links.indexOf(that.href) !== -1) {
      let nextElement = that.parentNode.nextSibling;
      if (nextElement.nodeName !== "SPAN") {
        that.parentNode.insertAdjacentHTML("afterend", '<span class="visited ml-auto">Đã xem</span>');
      }
    }
  }
}

const getTemplateCoin = (data) => {
  let xhtml = `
  <div class="sidebar-item-container">
    <h6>Giá Coin </h6>     
        <table class="table white-font">
          <thead>
            <th>Name</th>
            <th>Price</th>
            <th>Change (24h)</th>
          </thead>
          <tbody class="body-table-sidebar">`;

  data.forEach((item) => {
    let price = (Math.round(item.quote.USD.price * 100) / 100).toFixed(2);
    let percent = (Math.round(item.quote.USD.percent_change_24h * 100) / 100).toFixed(2);

    xhtml += `
      <tr>
        <td> ${item.name} </td>
        <td> $${price} </td>
        <td> ${percent} % </td>							
      </tr>
      `;
  });
  xhtml += `		
          </tbody>
        </table>      
    </div>`;

  return xhtml;
};

const getTemplateSJC = (sjc) => {
  let xhtml = `
  	<div class="sidebar-item-container">
      <h6>Giá Vàng</h6>     
      <table class="table white-font">
        <thead>
          <th>Loại Vàng</th>
          <th>Mua</th>
          <th>Bán</th>
        </thead>
        <tbody class="body-table-sidebar">`;
  if (sjc) {
    sjc.forEach((item) => {
      xhtml += `
        <tr>
          <td class="long-text"> ${item["$"].type} </td>
          <td> ${item["$"].buy} </td>
          <td> ${item["$"].sell} </td>							
        </tr>`;
    });
  } else {
    xhtml += `<tr><td>Cannot Get SJC data</td></tr>`;
  }

  xhtml += `		
	        			</tbody>
              </table>      
	        	</div>`;

  return xhtml;
};

//for select all filter rss sources button
// $(".rss-sources-select-all").click(function () {
//   $("#rss-categories-container :checkbox:not([disabled])").attr(
//     "checked",
//     true
//   );
// });
