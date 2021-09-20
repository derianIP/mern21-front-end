import Category from './Category';
import TableRow from './TableRow';

export default function OverviewContent() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
          <div className="main-content">
            <div className="row">
              <Category nominal={13000000} icon="ic-desktop">
                Game
                <br />
                Desktop
              </Category>
              <Category nominal={15000000} icon="ic-mobile">
                Game
                <br />
                Mobile
              </Category>
              <Category nominal={1000000} icon="ic-other">
                Game
                <br />
                Other
              </Category>
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">Game</th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <TableRow title="Mobile Legend" category="Mobile" image="overview-1" item={100} price={130000} status="Pending" />
                <TableRow title="Call of Duty:Modern" category="Mobile" image="overview-2" item={100} price={130000} status="Success" />
                <TableRow title="Clash of Clans" category="Mobile" image="overview-3" item={100} price={130000} status="Failed" />
                <TableRow title="The Royal Game" category="Mobile" image="overview-4" item={100} price={130000} status="Pending" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
