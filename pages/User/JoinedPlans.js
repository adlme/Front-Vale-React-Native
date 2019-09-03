import React, { Component } from "react";
import { Link } from "react-router-dom";
import userAPI from "../../services/user-service";
import Moment from "react-moment";
import BackNav from "../../components/BackNav";

class JoinedPlans extends Component {
  state = {
    plans: { plans: [] },
    loading: true
  };

  componentDidMount() {
    userAPI
      .getJoinedPlans()
      .then(plans => this.setState({ plans, loading: false }))

      .catch(error => console.log(error));
  }

  render() {
    return (
      <View>
        <BackNav />
        <View style={styles.plans - wrapper}>
          <Text>Joined Plans</Text>
          <View style={styles.plans - list}>
            {this.state.plans.plans.length > 0 ? (
              !this.state.loading &&
              this.state.plans.plans.map(plan => {
                return (
                  <View key={plan._id} style={styles.card.plan.category}>
                    <Link to={`/plans/${plan._id}`}>
                      <View style={styles.card - grid}>
                        <Text style={styles.title}>{plan.title}</Text>
                        <Text style={styles.description}>
                          {plan.description}
                        </Text>
                        <Text style={styles.date}>
                          <Moment format="D MMM" style={{ paddingRight: 10 }}>
                            {plan.date}
                          </Moment>
                          <Moment format="hh:mm">{plan.date}</Moment>
                        </Text>
                        <Text style={styles.category}>{plan.category}</Text>
                        <Text style={styles.attendees}>
                          &#128101;{plan.counter}
                        </Text>
                      </View>
                    </Link>
                  </View>
                );
              })
            ) : (
              <Text id="no-plans">No plans yet...</Text>
            )}
          </View>
        </View>
      </View>
    );
  }
}

export default JoinedPlans;

const styles = StyleSheet.create({
  plansWrapper: {
    width: "100%",
    minWidth: "100vw",
    minHeight: "100vh",
    paddingTop: "12%",
    paddingBottom: "85px"
  },
  plansList: {
    padding: "2% 0"
  },
  searchIcon: {
    height: 30,
    boxShadow: "0px 0px 5px 0px rgba(183, 179, 179, 0.75)",
    borderRadius: "50%"
  }
});
