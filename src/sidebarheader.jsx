const SidebarItem = () => {
    const sidebarData = [
        {
            Heading: "heading 1",
            items: ["h-1 item-1", "h-1 item-2"]
        },
        {
            Heading: "heading 2",
            items: ["h-2 item-1"]
        },
        {
            Heading: "heading 3",
            items: ["h-3 item-1", "h-3 item-2"]
        },
        {
            Heading: "heading 4",
            items: ["h-4 item-1", "h-4 item-2", "h-4 item-3"]
        },
        {
            Heading: "heading 5"
        },
        {
            Heading: "heading 6",
            items: ["h-6 item-1", "h-6 item-2", "h-6 item-3"]
        }
    ];

    return (
        <>
            {sidebarData.map((item, index) => (
                <div key={index}>
                    <h5>{item.Heading}</h5>
                    {(item.items&&
                        <ul>
                            {item.items.map((listItem, subIndex) => (
                                <li key={subIndex}>{listItem}</li>
                            ))}
                        </ul>
                        )}
                 
                </div>
            ))}
        </>
    );
};

export default SidebarItem;
