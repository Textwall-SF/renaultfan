addLayer("ts", {
    name: "Shop", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "S", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#11ff11",
	  tooltip: "Shop",
    row: 0, // Row the layer is in on the tree (0 is the first row)
    layerShown(){
        let visible = false
        if (hasMilestone('sy', 1) || player.ts.unlocked) visible = true
       return visible
    },
    upgrades: {
      11: {
        title: "Basic Tier Upgrade",
        description: "Gain Cz. fast",
        cost: new Decimal(1e14),
        currencyDisplayName: "Cz.",
        currencyInternalName: "points",
        effect() {
            return player.points.add(1).pow(0.5)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" },
	    },
    }
})
