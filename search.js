const search_bar = document.getElementById("search");

const levenshteinDistance = (s, t) => {
    if (!s.length) return t.length;
    if (!t.length) return s.length;
    const arr = [];
    for (let i = 0; i <= t.length; i++) {
        arr[i] = [i];
        for (let j = 1; j <= s.length; j++) {
            arr[i][j] =
                i === 0
                    ? j
                    : Math.min(
                        arr[i - 1][j] + 1,
                        arr[i][j - 1] + 1,
                        arr[i - 1][j - 1] + (s[j - 1] === t[i - 1] ? 0 : 1)
                    );
        }
    }
    return arr[t.length][s.length];
};

function search(){

    var foods = document.querySelectorAll(".food-list-item");
    var search_bar_value = "| " + String(search_bar.value).toLowerCase()
    foods.forEach(function(food){
        const foodtags = food.dataset.tags.split(" ");
        var edit_distance = levenshteinDistance(search_bar_value, food.id);
        var search_queries = search_bar_value.split(" ");
        search_queries = search_queries.filter(item => item !== "")
        console.log(search_queries)
        var tag_contains_search = false;
        for (const item1 of search_queries) {
            for (const item2 of foodtags) {
                if (item2.includes(item1)) {
                    tag_contains_search = true;
                }
            }
        }
        // const tag_contains_search = foodtags.some(word => word.includes(search_bar_value))
        if(tag_contains_search || edit_distance <= 2 || search_queries.length === 1){
            food.style.display = "flex";
        }else{
            food.style.display = "none";
        }
    })

}

search_bar.addEventListener("input", search)

search_bar.addEventListener("keypress", function(event){

    if (event.key === "Enter"){
        this.blur()
    }
})