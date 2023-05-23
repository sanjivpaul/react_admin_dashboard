import Chart from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./home.css"
import { userData } from "../../dummyData"
import WidgetSmall from "../../components/widgetSmall/WidgetSmall"
import WidgetsLarge from "../../components/widgetLarge/WidgetLarge"

export default function Home() {
    return (
        <div className='homePage'>
            <FeaturedInfo />
            <Chart data={userData} title="Sanjiv User Analytics" grid dataKey="Active User" />
            <div className="homeWidgets">
                <WidgetSmall />
                <WidgetsLarge />
            </div>
        </div>
    )
}
