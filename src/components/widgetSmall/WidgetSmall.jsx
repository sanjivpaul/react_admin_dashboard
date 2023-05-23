import "./widgetSmall.css"
import { Visibility } from "@material-ui/icons"

export default function WidgetSmall() {
    return (
        <div className="widgetSmall">
            <span className="widgetSmallTitle">New Join Members</span>
            <ul className="widgetSmallList">
                <li className="widgetSmallItem">
                    <img src="https://avatars.githubusercontent.com/u/86189749?s=400&u=92c5579bdef3e83bd12fc6c12d7608c3a3a69a5c&v=4" alt="" className="widgetSmallImg" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUsername">sanjiv paul</span>
                        <span className="widgetSmallUserTitle">Software Developer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon" /> Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
