interface ExperienceEntry {
    title: string;
    dates: string;
    company: string;
    bullets: string[];
    link?: string;
}

function ExperienceColumn({ entryData }: { entryData: ExperienceEntry }) {
    const parsedBullets: (JSX.Element | string)[][] = [];

    for (const bullet of entryData.bullets) {
        console.log(bullet)
        const result = []; // result is a list of strings and jsx elements
        let currText = '';
        let isStrong = false;

        for (let i = 0; i < bullet.length; i++) {
            const char = bullet[i];
            if (char === '*') {
                if (i === 0) {
                    isStrong = true;
                    continue;
                }
                if (isStrong) {
                    result.push(<strong>{`${currText}`}</strong>)
                    isStrong = false;
                    currText = ''
                    continue;
                }
                result.push(`${currText}`);
                currText = ''
                isStrong = true;
                continue;
            }
            currText += char;
        }
        console.log(result);
        parsedBullets.push(result);
    }

    return <div className="experience-col">
        <p><strong>{entryData.title}</strong></p>
        <p>{entryData.dates}</p>
        {entryData.link ?
            <p><a href={entryData.link}>{entryData.company}</a></p> :
            <p>{entryData.company}</p>}
        <ul>
            {parsedBullets.map((bullet, index) => {
                return <li key={`key: ${index}`}>{bullet}</li>
            })}
        </ul>
    </div>
}

export { ExperienceColumn };
export type { ExperienceEntry };