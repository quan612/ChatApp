// Create toast using jsFrame
const createToast = (position) => {
  const jsFrame = new JSFrame();

  const frame = jsFrame.showToast({
    left: position.left + 30,
    top: position.top - 20,
    width: 150,
    height: 30,
    duration: 1000,
    // html:
    //   '<div id="my_element" style="padding:10px;font-size:12px;color:darkgray;background-color: blue">Update Successfully</div>'
    html: '<span style="color:white;">Update success</span>',
  });
};

//Create slug input
function change_alias(alias) {
  var str = alias;
  str = str.toLowerCase();
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    " "
  );
  str = str.replace(/ *? /g, "-");
  str = str.trim();
  return str;
}

function statusHelper(linkPrefix, status, id) {
  let xhtmlStatus = "";
  let link = linkPrefix + "change-status/" + id + "/" + status;
  if (status === "active") {
    xhtmlStatus = `<span class="label label-success">active</span>`;
  } else if (status === "inactive") {
    xhtmlStatus = `<span class="label label-warning">inactive</span>`;
  }

  return `<a href="${link}" class="status_change">${xhtmlStatus}</a>`;
}

function specialHelper(linkPrefix, special, id) {
  let xhtmlSpecial = "";
  let link = linkPrefix + "change-special/" + id + "/" + special;
  if (special === "active") {
    xhtmlSpecial = '<span class="label label-success">Top Post</span>';
  } else if (special === "inactive") {
    xhtmlSpecial = '<span class="label label-warning">Normal</span>';
  }

  return `<a href="${link}" class="special_change">${xhtmlSpecial}</a>`;
}

$(document).ready(function () {
  var ckbAll = $(".cbAll");
  var fmAdmin = $("#zt-form");

  // CKEDITOR
  if ($("textarea#content_ck").length) {
    CKEDITOR.replace("content_ck");
  }

  //call active menu
  activeMenu();

  //check selectbox
  change_form_action("#zt-form .slbAction", "#zt-form", "#btn-action");

  //check all
  ckbAll.click(function () {
    $("input:checkbox").not(this).prop("checked", this.checked);
    if ($(this).is(":checked")) {
      $(".ordering").attr("name", "ordering");
    } else {
      $(".ordering").removeAttr("name");
    }
  });

  // hiden notify
  hiddenNotify(".close-btn");

  $("input[name=cid]").click(function () {
    if ($(this).is(":checked")) {
      $(this).parents("tr").find(".ordering").attr("name", "ordering");
    } else {
      $(this).parents("tr").find(".ordering").removeAttr("name");
    }
  });

  // CONFIRM DELETE
  $("a.btn-delete").on("click", () => {
    if (!confirm("Are you sure you want to delete this item?")) return false;
  });

  //active menu function
  function activeMenu() {
    var arrPathname = window.location.pathname.split("/");
    var pattern = typeof arrPathname[2] !== "undefined" ? arrPathname[2] : "";

    if (pattern != "") {
      $("#side-menu li a").each(function (index) {
        var subject = $(this).attr("href");
        if (subject != "#" && subject.search(pattern) > 0) {
          $(this).closest("li").addClass("active");
          if ($(this).parents("ul").length > 1) {
            $("#side-menu ul").addClass("in").css("height", "auto");
            $("#side-menu ul").parent().addClass("active");
          }
          return;
        }
      });
    } else {
      $("#side-menu li").first().addClass("active");
    }
  }

  //
  function change_form_action(slb_selector, form_selector, id_btn_action) {
    var optValue;
    var isDelete = false;
    var pattenCheckDelete = new RegExp("delete", "i");

    $(slb_selector).on("change", function () {
      optValue = $(this).val();

      if (optValue !== "") {
        $(id_btn_action).removeAttr("disabled");
      } else {
        $(id_btn_action).attr("disabled", "disabled");
      }
      $(form_selector).attr("action", optValue);
    });

    $(form_selector + " .btnAction").on("click", function () {
      isDelete = pattenCheckDelete.test($(slb_selector).val());
      if (isDelete) {
        var confirmDelete = confirm("Are you really want to delete?");
        if (confirmDelete === false) {
          return;
        }
      }

      var numberOfChecked = $(form_selector + ' input[name="cid"]:checked')
        .length;
      if (numberOfChecked == 0) {
        alert("Please choose some items");
        return;
      } else {
        var flag = false;
        var str = $(slb_selector + " option:selected").attr("data-comfirm");

        if (str != undefined) {
          //Kiểm tra giá trị trả về khi user nhấn nút trên popup
          flag = confirm(str);
          if (flag == false) {
            return flag;
          } else {
            $(form_selector).submit();
          }
        } else {
          if (optValue != undefined) {
            $(form_selector).submit();
          }
        }
      }
    });
  }

  // hidden parent (hidden message notify)
  function hiddenNotify(close_btn_selector) {
    $(close_btn_selector).on("click", function () {
      $(this).parent().css({ display: "none" });
    });
  }

  $('select[name="group_id"]').change(function () {
    $('input[name="group_name"]').val($(this).find("option:selected").text()); //TH chọn Choose Group: validate đã kiểm tra
  });

  $('select[name="category_id"]').change(function () {
    $('input[name="category_name"]').val(
      $(this).find("option:selected").text()
    ); //TH chọn Choose Group: validate đã kiểm tra
  });

  $('select[name="category_id_noAjax"]').change(function () {
    $('input[name="category_name"]').val(
      $(this).find("option:selected").text()
    ); //TH chọn Choose Group: validate đã kiểm tra
  });

  $('select[name="filter_group"]').change(function () {
    var path = window.location.pathname.split("/");
    var linkRedirect =
      "/" + path[1] + "/" + path[2] + "/filter-group/" + $(this).val();
    window.location.pathname = linkRedirect;
  });

  // in case a category is selected
  $('select[name="filter_category"]').change(function () {
    var path = window.location.pathname.split("/");
    var linkRedirect =
      "/" + path[1] + "/" + path[2] + "/filter-category/" + $(this).val();
    window.location.pathname = linkRedirect;
  });

  // in case a tag is selected from the select box
  $('select[name="filter_tag"]').change(function () {
    var path = window.location.pathname.split("/");
    var linkRedirect =
      "/" + path[1] + "/" + path[2] + "/filter-tag/" + $(this).val();
    window.location.pathname = linkRedirect;
  });

  //get tags entered
  $('input[name="input_tags"]').focusout(function () {
    $('input[name="input_tags"]').tagsinput("items");
  });

  $("input#name_slug").keyup(function () {
    $('input[name="slug"]').val(change_alias($(this).val()));
  });

  $("form[name=form-upload]").submit(function (event) {
    let avatar = $(this).find("input[name=avatar]");
    $(this).find("input[name=avatar]").remove();
    $(this).append(avatar).css({ display: "none" });
  });

  $('select[name="category_id"]').change(handleCategoryChange);
});

$(document).on("click", "a.status_change", handleStatusChange);
$(document).on("click", "a.special_change", handleSpecialChange);
// $(document).on("change", "select[name='category_id']", handleCategoryChange);

function handleStatusChange(e) {
  e.preventDefault();
  e.stopPropagation();

  var thisElement = $(this);
  var parent = $(this).parent();

  $.ajax({
    url: this.href, // current href of a tag
    type: "POST",
    dataType: "json",
    success: function (data) {
      $(thisElement).remove();

      var currentElement = statusHelper(data.currentUrl, data.status, data._id);
      $(parent).append(currentElement);

      var position = $(parent).offset();
      createToast(position);
    },
    error: function (jqXHR, textStatus, err) {
      alert("text status " + textStatus + ", err " + err);
    },
  });
}

function handleSpecialChange(e) {
  e.preventDefault();
  e.stopPropagation();

  var thisElement = $(this);
  var parent = $(this).parent();

  $.ajax({
    url: this.href, // current href of a tag
    type: "POST",
    dataType: "json",
    success: function (data) {
      $(thisElement).remove();
      var currentElement = specialHelper(
        data.currentUrl,
        data.special,
        data._id
      );
      $(parent).append(currentElement);

      var position = $(parent).offset();
      createToast(position);
    },
    error: function (jqXHR, textStatus, err) {
      alert("text status " + textStatus + ", err " + err);
    },
  });
}

function handleCategoryChange(e) {
  e.preventDefault();
  e.stopPropagation();

  var parent = $(this).parent();
  var SelectedValue = $("option:selected", this).val();

  $.ajax({
    url: SelectedValue, // current selected value
    type: "POST",
    dataType: "json",
    success: function (data) {
      var position = $(parent).offset();
      position.left = position.left + 60;
      createToast(position);
    },
  });
}
