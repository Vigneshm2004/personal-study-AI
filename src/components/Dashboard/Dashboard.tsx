import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Clock, 
  Target, 
  Brain,
  BookOpen,
  Calendar,
  Star,
  ChevronRight,
  Zap,
  Award,
  Users,
  MessageCircle,
  Play,
  Plus,
  BarChart3,
  Timer,
  Sparkles
} from 'lucide-react';
import { storage } from '../../utils/storage';
import { Note, StudySession, StudyGoal } from '../../types';
import { format, isToday, isThisWeek } from 'date-fns';

const Dashboard: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [sessions, setSessions] = useState<StudySession[]>([]);
  const [goals, setGoals] = useState<StudyGoal[]>([]);

  useEffect(() => {
    setSessions(storage.getSessions());
    setGoals(storage.getGoals());
  }, []);

  const todaysSessions = sessions.filter(session => isToday(session.date));
  const weekSessions = sessions.filter(session => isThisWeek(session.date));
  const recentNotes = notes.slice(0, 5);
  const activeGoals = goals.filter(goal => !goal.isCompleted);

  const stats = [
    {
      label: 'Notes Created',
      value: notes.length,
      icon: BookOpen,
      color: 'from-emerald-500 to-teal-600',
      change: '+12%',
      bgColor: 'from-lime-50 to-green-100',
      iconBg: 'from-emerald-500 to-teal-600'
    },
    {
      label: 'Study Time Today',
      value: `${todaysSessions.reduce((acc, s) => acc + s.duration, 0)}min`,
      icon: Clock,
      color: 'from-teal-500 to-emerald-600',
      change: '+25%',
      bgColor: 'from-lime-50 to-green-100',
      iconBg: 'from-teal-500 to-emerald-600'
    },
    {
      label: 'Active Goals',
      value: activeGoals.length,
      icon: Target,
      color: 'from-green-500 to-teal-600',
      change: '+5%',
      bgColor: 'from-lime-50 to-green-100',
      iconBg: 'from-green-500 to-teal-600'
    },
    {
      label: 'Weekly Accuracy',
      value: weekSessions.length > 0 
        ? `${Math.round(weekSessions.reduce((acc, s) => acc + s.accuracy, 0) / weekSessions.length)}%`
        : '0%',
      icon: Brain,
      color: 'from-emerald-500 to-green-600',
      change: '+8%',
      bgColor: 'from-lime-50 to-green-100',
      iconBg: 'from-emerald-500 to-green-600'
    }
  ];

  const quickActions = [
    { label: 'Create Note', icon: BookOpen, color: 'from-emerald-500 to-teal-600', action: () => {} },
    { label: 'Start Flashcards', icon: Brain, color: 'from-teal-500 to-emerald-600', action: () => {} },
    { label: 'Pomodoro Timer', icon: Timer, color: 'from-green-500 to-teal-600', action: () => {} },
    { label: 'Take Quiz', icon: Award, color: 'from-emerald-500 to-green-600', action: () => {} },
    { label: 'Join Study Group', icon: Users, color: 'from-teal-500 to-green-600', action: () => {} },
    { label: 'View Analytics', icon: BarChart3,

 color: 'from-green-500 to-emerald-600', action: () => {} }
  ];

  const upcomingEvents = [
    { title: 'Math Study Group', time: 'Today, 3:00 PM', participants: 12 },
    { title: 'Physics Quiz Challenge', time: 'Tomorrow, 7:00 PM', participants: 45 },
    { title: 'Chemistry Workshop', time: 'Friday, 2:00 PM', participants: 23 }
  ];

  return (
    <div className="min-h-screen bg-emerald-50">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-900 to-teal-700 bg-clip-text text-transparent">
                  Welcome back, Alex! 🌱
                </h1>
                <p className="text-teal-700 text-lg">Ready to continue your learning journey?</p>
              </div>
            </div>
            
            {/* Motivational Banner */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-6 text-white shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">🌿 20-Day Study Streak!</h2>
                  <p className="text-emerald-100">You're on fire! Keep up the amazing work.</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">Level 15</div>
                  <div className="text-emerald-100">3,560 XP</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="group">
                  <div className={`bg-gradient-to-br ${stat.bgColor} rounded-2xl p-6 shadow-lg border border-lime-100 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${stat.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <span className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                        {stat.change}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-3xl font-bold text-emerald-900">{stat.value}</p>
                      <p className="text-sm text-teal-700 font-medium">{stat.label}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center">
              <Zap className="w-6 h-6 mr-2 text-green-500" />
              Quick Actions
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <button
                    key={index}
                    onClick={action.action}
                    className="group bg-lime-50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-lime-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-green-100"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${action.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm font-semibold text-teal-700 text-center">{action.label}</p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Notes */}
            <div className="lg:col-span-2">
              <div className="bg-lime-50 backdrop-blur-sm rounded-2xl shadow-xl border border-lime-100">
                <div className="p-6 border-b border-green-100">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-emerald-900 flex items-center">
                      <BookOpen className="w-5 h-5 mr-2 text-emerald-500" />
                      Recent Notes
                    </h2>
                    <button className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm flex items-center group">
                      View All 
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  {recentNotes.length > 0 ? (
                    <div className="space-y-4">
                      {recentNotes.map((note) => (
                        <div key={note.id} className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-green-100 transition-all duration-200 cursor-pointer border border-transparent hover:border-green-200">
                          <div className="w-12 h-12 bg-gradient-to-br from-lime-100 to-teal-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                            <BookOpen className="w-6 h-6 text-emerald-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="font-semibold text-emerald-900 truncate group-hover:text-emerald-600 transition-colors">
                                {note.title}
                              </h3>
                              {note.isStarred && <Star className="w-4 h-4 text-green-500 fill-current" />}
                            </div>
                            <p className="text-sm text-teal-700 truncate">{note.content}</p>
                            <p className="text-xs text-teal-600 mt-1">{format(note.updatedAt, 'MMM d, yyyy')}</p>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {note.tags.slice(0, 2).map((tag) => (
                              <span key={tag} className="px-2 py-1 bg-lime-100 text-teal-700 text-xs rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-gradient-to-br from-lime-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <BookOpen className="w-8 h-8 text-teal-600" />
                      </div>
                      <p className="text-teal-700 mb-4">No notes yet. Create your first note to get started!</p>
                      <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
                        Create Note
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Active Goals */}
              <div className="bg-lime-50 backdrop-blur-sm rounded-2xl shadow-xl border border-lime-100">
                <div className="p-6 border-b border-green-100">
                  <h2 className="text-xl font-bold text-emerald-900 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-green-500" />
                    Active Goals
                  </h2>
                </div>
                <div className="p-6">
                  {activeGoals.length > 0 ? (
                    <div className="space-y-4">
                      {activeGoals.slice(0, 3).map((goal) => (
                        <div key={goal.id} className="space-y-3 p-4 bg-gradient-to-r from-lime-50 to-green-100 rounded-xl border border-green-100">
                          <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-emerald-900 text-sm">{goal.title}</h3>
                            <span className="text-sm font-bold text-green-600">{goal.progress}%</span>
                          </div>
                          <div className="w-full bg-green-200 rounded-full h-2 overflow-hidden">
                            <div 
                              className="bg-gradient-to-r from-emerald-500 to-teal-600 h-2 rounded-full transition-all duration-500 shadow-sm"
                              style={{ width: `${goal.progress}%` }}
                            />
                          </div>
                          <p className="text-xs text-teal-600">Due {format(goal.targetDate, 'MMM d')}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Target className="w-12 h-12 text-teal-600 mx-auto mb-3" />
                      <p className="text-teal-700 text-sm mb-4">Set your first study goal!</p>
                      <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-4 py-2 rounded-xl font-medium transition-all duration-200 text-sm">
                        Create Goal
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="bg-lime-50 backdrop-blur-sm rounded-2xl shadow-xl border border-lime-100">
                <div className="p-6 border-b border-green-100">
                  <h2 className="text-xl font-bold text-emerald-900 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-emerald-500" />
                    Upcoming Events
                  </h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-lime-50 to-green-100 rounded-xl border border-green-100 hover:shadow-md transition-all duration-200">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-emerald-900 text-sm">{event.title}</h4>
                          <p className="text-xs text-teal-600">{event.time}</p>
                          <p className="text-xs text-green-600">{event.participants} participants</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Achievement Showcase */}
              <div className="bg-gradient-to-br from-lime-50 to-green-100 rounded-2xl p-6 border border-green-100 shadow-xl">
                <h3 className="font-bold text-emerald-900 mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-green-500" />
                  Latest Achievement
                </h3>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-emerald-900 mb-1">Study Streak Master</h4>
                  <p className="text-sm text-teal-700 mb-3">15 consecutive days of studying</p>
                  <div className="text-xs text-green-600 font-semibold">+500 XP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;