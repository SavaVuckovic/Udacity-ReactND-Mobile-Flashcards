import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { gray, blueDark, blueLight } from '../utils/colors';
import Button from './Button';

class QuizScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { show: 'question' }
    this.showQuestionOrAnswer = this.showQuestionOrAnswer.bind(this);
  }

  showQuestionOrAnswer() {
    if(this.state.show === 'question') {
      this.setState({ show: 'answer' });
    } else if(this.state.show === 'answer') {
      this.setState({ show: 'question' });
    }
  }

  correct() {
    console.log('correct');
  }

  incorrect() {
    console.log('incorrect');
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.quizProgress}>
          <Text>x% Complete</Text>
          <Text>Card 2/7</Text>
        </View>

        <View style={styles.quizCard}>
          {
            this.state.show == 'question'
            ? <Text style={styles.questionText}>Question ??</Text>
            : <Text style={styles.answerText}>Answer</Text>
          }

          <TouchableWithoutFeedback
            onPress={this.showQuestionOrAnswer}
          >
            <View>
              {
                this.state.show == 'question'
                ? <Text>Show Answer</Text>
                : <Text>Show Question</Text>
              }
            </View>
          </TouchableWithoutFeedback>

          <View>
            <Button text='Correct' func={this.correct}/>
            <Button text='Incorrect' func={this.incorrect}/>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  quizProgress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: blueLight
  },
  quizCard: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 25,
    padding: 25,
    backgroundColor: gray,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowRadius: 6,
    shadowOpacity: 1,
    elevation: 3
  },
  questionText: {
    fontSize: 26,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  answerText: {
    fontSize: 26,
    marginBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    color: blueDark
  }
});

export default QuizScreen;