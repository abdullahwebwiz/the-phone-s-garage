import style from "./adminpanel.module.css";
const AdminPanel = () => {
  return (
    <div className={style.main}>
      <div className={style.con}>
        <div className={style.card} style={{ backgroundColor: "Red" }}>
          Orders
        </div>
        <div className={style.card} style={{ backgroundColor: "Blue" }}>
          users
        </div>
        <div className={style.card} style={{ backgroundColor: "Green" }}>
          Products
        </div>
        <div className={style.card} style={{ backgroundColor: "purple" }}>
          Blog Posts
        </div>
      </div>
    </div>
  );
};
export default AdminPanel;
