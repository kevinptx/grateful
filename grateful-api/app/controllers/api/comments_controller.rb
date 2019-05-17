class Api::CommentsController < ApplicationController
  before_action :get_comment, only: [:update, :destroy]

  def index
    comments = Comment.where("entry_id = #{params[:entry_id]}")
    render json: comments
  end

  def create
    comment = Comment.new(comment_params)

    if comment.save
      render json: comment
    else
      render json: {error: comment.errors.full_messages.to_sentence}
    end
  end

  def update
    cp = comment_params
    if cp[:upvotes]
      cp[:upvotes] = @comment.upvotes + 1
    elsif cp[:downvotes]
      cp[:downvotes] = @comment.downvotes + 1
    end

    if @comment.update(cp)
      render json: @comment
    else
      render json: {error: @comment.errors.full_messages.to_sentence}
    end
  end

  def destroy
    if @comment.destroy
      render json: {comment_was: "deleted"}
    else
      render json: {error: @comment.errors.full_messages.to_sentence}
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:content, :entry_id, :upvotes, :downvotes)
  end

  def get_comment
    @comment = Comment.find_by(id: params[:id])
  end
end
