import ReactMarkdown from 'react-markdown'

export default function ClaudeRecipe(props) {
    return (
        <section>
            {/* <h2>The Chef:</h2> */}
            <ReactMarkdown children={props.recipe} />
        </section>
    )
}