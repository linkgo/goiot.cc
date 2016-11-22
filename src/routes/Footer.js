import React, {Component} from 'react';
import { Button } from 'antd';
import { Row, Col } from 'antd';
import { Menu, Breadcrumb, Icon, Tooltip } from 'antd';
import styles from './Footer.less';

class Footer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  componentDidMount() {
    document.documentElement.style.height = "auto";
    document.documentElement.style.padding = "0";
    document.documentElement.style.margin = "0";
    document.documentElement.style.background = "rgb(236, 240, 241)";
    document.body.style.height = "auto";
    document.body.style.padding = "0";
    document.body.style.margin = "0";
    document.body.style.background = "rgb(236, 240, 241)";
    document.getElementById('root').style.height = "auto";
    document.getElementById('root').style.overflowY = "visible";
  }

  render() {
    return (
      <div>
<div className={styles.lab_content}>
  <h1>Fixed footer, scroll down.</h1>

  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A rerum blanditiis soluta nesciunt doloremque voluptate earum tempore fugit eveniet veritatis adipisci magni alias vitae dignissimos incidunt repellat ea quisquam amet eligendi perspiciatis pariatur excepturi magnam omnis aliquam quo aperiam non quibusdam sit molestiae ex. Quasi ipsa libero magnam maiores delectus.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi vitae perferendis natus porro voluptate molestias deserunt impedit numquam recusandae ducimus dolorem facilis qui autem dolorum quam omnis repellendus asperiores neque excepturi ipsa! Rerum corrupti similique adipisci dolorem cupiditate modi veritatis eum doloribus placeat at quos explicabo et quidem! Illo incidunt obcaecati quo rem nesciunt dolorum fugit vitae voluptates eaque soluta!</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eligendi voluptates suscipit nesciunt nisi illo placeat qui voluptas quas vero voluptatibus eius in voluptate. Itaque eius nobis error id ullam officiis consectetur? Laboriosam commodi excepturi distinctio voluptas. Quam mollitia culpa ipsa? Modi magni officiis quibusdam nulla eum magnam quo in distinctio quis deleniti aliquid minima cum. Assumenda magni quae incidunt aliquam? Omnis eum aspernatur molestiae provident in quod delectus dolor sint vero? Quibusdam tempore similique.</p>

  <h2>Keep scrolling..</h2>

  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet eum aspernatur quibusdam ad provident molestiae adipisci numquam vitae molestias quidem vero nostrum voluptates harum! Vero veniam adipisci minima corporis quidem sunt omnis illum similique consectetur enim atque autem distinctio quas deserunt ex amet itaque ipsa cumque sed asperiores doloremque aliquid praesentium nihil tenetur cum aliquam.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ratione blanditiis vero rem cupiditate magni praesentium veniam quibusdam dicta recusandae? Fugit fuga debitis inventore possimus distinctio perferendis.</p>
</div>

<div className={styles.lab_fixed_footer}>
  <div className={styles.lab_content}>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ducimus nemo quo totam neque quis soluta nisi obcaecati aliquam saepe dicta adipisci blanditiis quaerat earum laboriosam accusamus nesciunt! Saepe ex maxime enim asperiores nisi. Obcaecati nostrum nobis laudantium aliquam commodi veniam magni similique ullam quis pariatur voluptatem harum id error.</p>
  </div>
</div>
      </div>
    );
  }
}

export default Footer;
