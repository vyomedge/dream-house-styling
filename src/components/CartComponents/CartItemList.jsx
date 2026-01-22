import CartItem from "./CartItem";

const CartItemList = ({ itemList }) => {
  return (
    <>
      {itemList.map((item, idx) => {
        return (
          <CartItem
            key={idx}
            title={item.ProductName}
            subtitle="Deep Botanical • Textured Paper"
            price={item.Price[0].Price[0].SalePrice}
            priceByQuanitity={item.TotalPrice}
            image={item.Image}
            cartId={item.id}
            cardData={item}
          />
        );
      })}
      {/* <CartItem
        title="Midnight Flora"
        subtitle="Deep Botanical • Textured Paper"
        price="$125.00"
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuDddcDj73KuwXyb7KKAnTSyl34IzI47kZA_b4LQzdGYTa5SnPL78XZbwMJY-g1nMloSV9yV3wSWOZxnOT-6uXssvnLq1ix81sWXMqAG3kNwdojVo_p0sc6H3Izg5f-hMSJ3bQYk6dZsvUOEbgBGLsB8sh_IDACh7UjcNMS_yWhZ1MtsBskUyr0dkgCWGUiX1jY3wY0rlV4Y7ln02ScJ_Akf_3s2InCAVmoFDMK94UntSnLTN-okxr7LZ0Y5McQZo-uKqpedJutevys"
      />

      <CartItem
        title="Geometric Azure"
        subtitle="Modern Art • Gold Foil"
        price="$145.00"
        image="https://lh3.googleusercontent.com/aida-public/AB6AXuCvbQounX5xGGIPIn-bIeqIpMA-aQrtKQWoQD6rH1vDJk6OWEDLoPDQLS6Gz4RQ-XR11dMTftViB3a_wM-xIjNguNeK2A3pc3oTjYAvCG45YaHPGSvbEYwzOCse8Ek2q5kjDDP6SVRHWca2VfVVW8MzZcIlTBSy3gl2R6jpw4tlUhgeXMxjHlRYQBvocl1eeKdHg7IATr2G4eZX7OqPzbQVJ0uEYzNkELsDveGEiBzedDEdYY9VJ7u5CsMFKtxubkRylygoc2wDL2s"
      /> */}
    </>
  );
};

export default CartItemList;
