<template>
    <div class='survey'>
        <h1>{{ msg }}</h1>
        <styled-title>Subheading</styled-title>
        <wrapper id="surveyContainer">
            <survey :survey='survey'></survey>
        </wrapper>
    </div>
</template>

<script>
// Styles
import '../styles/global'
import { Wrapper, StyledTitle } from '../styles'

// Components
import * as SurveyVue from 'survey-vue'
var Survey = SurveyVue.Survey

// Exports
export default {
    name: 'App',
    components: {
        'styled-title': StyledTitle,
        wrapper: Wrapper,
        Survey
    },
    data () {
        var json = {
            title: 'RadioCanada Hackathon 2018',
            pages: [
                {
                    name: 'intro',
                    questions: [
                        {
                            type: 'radiogroup',
                            choices: ['Hell Yes', 'Nope...'],
                            isRequired: true,
                            name: 'hackathon',
                            title: 'Are we going to kick-ass and win?'
                        },
                        {
                            type: 'checkbox',
                            choices: ['Cause we rock', 'Because we\'re awesome'],
                            isRequired: true,
                            name: 'confirmation',
                            title: 'Why?',
                            visibleIf: '{hackathon} = "Hell Yes"'
                        }
                    ]
                },
                {
                    name: 'oops',
                    visibleIf: '{hackathon} = "Nope..."',
                    questions: [
                        {
                            type: 'html',
                            name: 'info',
                            html: 'Dude... Get out!'
                        }
                    ]
                },
                {
                    name: 'follow-up',
                    visibleIf: '{hackathon} = "Hell Yes"',
                    questions: [
                        {
                            type: 'radiogroup',
                            choices: ['Yes', 'No'],
                            isRequired: true,
                            name: 'follow-up',
                            title: 'Standard follow question?'
                        }
                    ]
                }
            ]
        }
        var model = new SurveyVue.Model(json)
        return {
            msg: 'Welcome to App',
            survey: model
        }
    },
    mounted () {
        const vm = this
        const survey = vm.survey
        survey.onComplete.add(function (sender) {
            console.log(sender.data)
        })
    }
}
</script>
