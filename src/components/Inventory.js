import React from "react";
import Purse from "./Purse";
import InventoryTile from "./InventoryTile";
import PotionTile from "./PotionTile"

function Inventory({ inventory, potions, sell, shake, stopShake, gold }) {
  const inventoryList = inventory.map((item) => {
    const potion = potions.find((potion) => potion.id === item.id);

    return (
      // <InventoryTile key={potion.id} potion={potion} sell={sell}>
      //   <h4>
      //     {potion.name} x {item.amount}
      //   </h4>
      // </InventoryTile>
      <PotionTile key={potion.id} potion={potion} buySell={sell} className="Inventory-card">
        <h4>
          {potion.name} x {item.amount}
        </h4>
      </PotionTile>
    );
  });

  return (
    <div className="inventory">
      <h2>Inventory</h2>
      <Purse stopShake={stopShake} shake={shake} gold={gold} />
      <div className="inventory-cards">{inventoryList}</div>
    </div>
  );
}

export default Inventory;
