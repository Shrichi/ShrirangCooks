const search_bar = document.getElementById("Search");

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

    var foods = document.querySelectorAll(".foodlist");

    foods.forEach(function(food){
        var search_bar_value = String(search_bar.value).toLowerCase()
        var edit_distance = levenshteinDistance(search_bar_value, food.id)
        if(food.id.includes(search_bar_value) || edit_distance <= 2){
            food.style.display = "list-item"
        }else{
            food.style.display = "none"
        }
    })

}

search_bar.addEventListener("input", search)

search_bar.addEventListener("keypress", function(event){

    if (event.key === "Enter"){
        this.blur()
    }
})