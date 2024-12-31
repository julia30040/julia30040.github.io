// @flow
import React from 'react'
import radium from 'radium';

import partyTimeTitleImageURL from './assets/title-party-time.png';
import dressCodeTitleImageURL from './assets/title-dresscode.png';
import titleImageURL from './assets/title-how-to-come.png';
import ribbonImageURL from './assets/ribbons.svg';

const styles = {
    wrapper: {
        margin: '64px 0 0',
        position: 'relative',
    },
    deco: {
        position: 'absolute',
        top: -255,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: -1,
    },
    title: {
        width: 310,
        display: 'block',
        margin: '32px auto 16px',
    },
    contentBlock: {
        borderRadius: 8,
        backgroundColor: '#F8F9FA',
        padding: '40px 32px',
    },
    listItem: {
        marginBottom: 32,
    },
    itemTitle: {
        borderLeft: '4px solid #8E6F68',
        paddingLeft: 16,
        color: '#8E6F68',
        fontSize: 16,
        fontWeight: 600,
    },
    itemTitleWithMargin: {
        marginBottom: 16,
    },
    itemTitleGreen: {
        color: '#789179',
        borderColor: '#789179',
    },
    itemDescription: {
        color: '#3D3D3D',
        fontSize: 14,
        lineHeight: 1.6,
    },
    itemLink: {
        color: '#8E6F68',
        textDecoration: 'underline',
    },
    ol: {
        paddingLeft: 16,
    }
}

function HowToComeSection() {
    return (
        <div style={styles.wrapper}>
            <img style={styles.deco} src={ribbonImageURL} />
            <img style={styles.title} src={partyTimeTitleImageURL} />
            <div style={styles.contentBlock}>
                <div>
                    <div style={styles.itemTitle}>
                        🕚️ 時間：2025 年 5 月 3 日 (六)<br/>11:30 入場, 12:00 準時開席。
                    </div>
                </div>
            </div>
            <img style={styles.title} src={titleImageURL} />
            <div style={styles.contentBlock}>
                <div style={styles.listItem}>
                    <div style={[styles.itemTitle, styles.itemTitleWithMargin]}>📍地點：<a style={styles.itemLink} href="https://maps.app.goo.gl/TvPduzNsVK5kUK7E8" target="_blank" rel="noreferrer noopener">桃園 Honey Wood Cafe</a></div>
                    <div style={styles.itemDescription}>桃園市平鎮區復旦路四段116巷51號</div>
                </div>
                <div style={styles.listItem}>
                    <div style={[styles.itemTitle, styles.itemTitleWithMargin, styles.itemTitleGreen]}>自行開車</div>
                    <div style={styles.itemDescription}>晶麒莊園靠近「新屋交流道」，下交流道後車程約5分鐘，而且設有免費的大型平面停車場。</div>
                </div>
                <div>
                    <div style={[styles.itemTitle, styles.itemTitleWithMargin, styles.itemTitleGreen]}>大眾運輸轉乘計程車</div>
                    <div style={styles.itemDescription}>
                        <ol style={styles.ol}>
                            <li>搭乘火車到中壢站，再轉乘計程車<br/>（約4.5公里）</li>
                            <li>搭乘機場捷運到環北站，再轉乘計程車<br/>（約5公里）</li>
                            <li>搭乘高鐵到桃園站，再轉乘計程車<br/>（約11公里）</li>
                        </ol>
                    </div>
                </div>
            </div>
            <img style={styles.title} src={dressCodeTitleImageURL} />
            <div style={styles.contentBlock}>
                <div style={[styles.itemTitle, styles.itemTitleWithMargin]}>白/奶茶色/淺藍/鵝黃</div>
            </div>
        </div>
    );
}

export default radium(HowToComeSection);