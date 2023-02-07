var totalFruit = function(fruits) {
    if (new Set(fruits).size < 3) return fruits.length
    let max = 0, before = 0
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === fruits[i + 1]) {
            before++
            continue
        }
        const set = new Set()
        for (let j = i; j < fruits.length; j++) {
            set.add(fruits[j])
            if (set.size === 2) max = Math.max(max, j - i + 1 + before)
            if (set.size > 2) break
        }
        before = 0
    }
    return max
};
