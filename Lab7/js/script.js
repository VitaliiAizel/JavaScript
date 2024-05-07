(function (global) {
    const ns = {};

    const catalogJson = "data/catalog.json";
    const catalogTitleUrl = "snippets/catalogTitle.html";
    const catalogUrl = "snippets/catalog.html";
    const categoryJson = "data/categories/";
    const categoryTitleUrl = "snippets/categoryTitle.html";
    const categoryUrl = "snippets/category.html";
    let randCategorySN;

    const insertHtml = function (selector, html) {
        const targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    };

    const insertProperty = function (string, propName, propValue) {
        const propToReplace = "{{" + propName + "}}";
        string = string.replace(new RegExp(propToReplace, "g"), propValue);
        return string;
    }

    document.addEventListener("DOMContentLoaded",
        function (event) {
            $ajaxUtils.sendGetRequest(catalogJson, catalogBuildingHtml);
        });

    document.getElementById("Catalog").addEventListener("click",
        function (event) {
            $ajaxUtils.sendGetRequest(catalogJson, catalogBuildingHtml);
        });

    ns.loadCategory = function (categorySN) {
        if (categorySN === "SP")
            $ajaxUtils.sendGetRequest(categoryJson + randCategorySN + ".json", categoryBuildingHtml);
        else
            $ajaxUtils.sendGetRequest(categoryJson + categorySN + ".json", categoryBuildingHtml);
    }

    function catalogBuildingHtml(categories) {
        $ajaxUtils.sendGetRequest(catalogTitleUrl,
            function (catalogTitleHtml) {
                $ajaxUtils.sendGetRequest(catalogUrl,
                    function (catalogHtml) {
                        const catalogViewHtml = catalogBuildingViewHtml(categories, catalogTitleHtml, catalogHtml);
                        insertHtml("#main-content", catalogViewHtml);
                    }, false);
            }, false);

        let randCategoryId = Math.floor(Math.random() * (categories.length - 1)) + 1;
        for (let i = 0; i < categories.length - 1; i++)
            if (categories[i].id === randCategoryId)
                randCategorySN = categories[i].shortname;

    }

    function catalogBuildingViewHtml(categories, catalogTitleHtml, catalogHtml) {
        let finalHtml = catalogTitleHtml;
        finalHtml += "<section class='row'>";

        for (let i = 0; i < categories.length; i++) {
            let html = catalogHtml;
            const image = categories[i].img;
            const name = "" + categories[i].name;
            const shortName = categories[i].shortname;
            const notes = categories[i].notes;

            html = insertProperty(html, "name", name);
            html = insertProperty(html, "img", image);
            html = insertProperty(html, "shortname", shortName);
            html = insertProperty(html, "notes", notes);

            finalHtml += html;
        }

        finalHtml += "</section>";
        return finalHtml;
    }

    function categoryBuildingHtml(items) {
        $ajaxUtils.sendGetRequest(categoryTitleUrl,
            function (categoryTitleHtml) {
                $ajaxUtils.sendGetRequest(categoryUrl,
                    function (categoryHtml) {
                        const categoryViewHtml = categoryBuildingViewHtml(items, categoryTitleHtml, categoryHtml);
                        insertHtml("#main-content", categoryViewHtml);
                    }, false);
            }, false);

    }

    function categoryBuildingViewHtml(items, categoryTitleHtml, categoryHtml) {
        const categoryItems = items.catalogitems;

        categoryTitleHtml = insertProperty(categoryTitleHtml, "name", items.category.name);
        categoryTitleHtml = insertProperty(categoryTitleHtml, "notes", items.category.notes);

        let finalHtml = categoryTitleHtml;
        finalHtml += "<section class='row'>";

        for (let i = 0; i < categoryItems.length; i++) {
            let html = categoryHtml;

            html = insertProperty(html, "price", categoryItems[i].price + " € / kg <br><br>");
            html = insertProperty(html, "name", categoryItems[i].name);
            html = insertProperty(html, "description", "<h5>Description and cooking tips: </h5>" + categoryItems[i].description);
            html = insertProperty(html, "img", categoryItems[i].img);

            finalHtml += html;
        }
        finalHtml += "</section>";
        return finalHtml;
    }

    global.$ns = ns;

})(window);